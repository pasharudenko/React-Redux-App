const jwt =require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode( { sub: user.id, iat: timestamp }, config.secret );
}

exports.signin = function (req, res, next) {
  // User has already had their login and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) { // req - request, res - response, next - mostly for error handling
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;

    if(!login || !email || !password) {
        return res.status(422).send({ error: 'You must provide login, email, password' })
    }

    // See if a user with the given email exists
    User.findOne   ({$or: [{email: email}, {login: login}]}).exec( function (err, existsingUser) {
        if (err) { return next(err); }

        // If a user with email does exist, return an error
        if(existsingUser) {
            return res.status(422).send({ error: 'Login or Email is in use' });
        }

        // If a user with email does NOT exist, create and save user record
        const user = new User({
            login: login,
            email: email,
            password:password
        });

        user.save(function (err) {
            if(err) { return next(err); }
            // Respond to request indicating the user was created
            res.json({ token: tokenForUser(user) });
        })

    });
};
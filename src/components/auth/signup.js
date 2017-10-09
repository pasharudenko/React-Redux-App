import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';

class SignUp extends Component {
    onFormSubmit(formProps) {
        this.props.SignUpUser(formProps);
    }
    renderAlert() {
        if(this.props.errorMessage) {
            console.log('wtf?');
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        console.log(this.props.errorMessage);
        const { handleSubmit, fields:{ login, email, password, confirmPassword } } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2 className="col-md-offset-3">Sign Up Form!</h2>
                        <hr/>
                        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                            <div className="form-group">
                                <fieldset>
                                    <label>Email:</label>
                                    <input type="text" placeholder="Enter email..." className="form-control" {...email}/>
                                    { email.touched && email.error && <div className="text-danger">
                                        <strong>Danger!</strong> {email.error}
                                    </div> }
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <label>Login:</label>
                                    <input type="text" placeholder="Enter login..." className="form-control" {...login}/>
                                    { login.touched && login.error && <div className="text-danger">
                                        <strong>Danger!</strong>{login.error}</div> }
                                </fieldset>
                            </div>
                            <div className="form-group ">
                                <fieldset>
                                    <label>Password:</label>
                                    <input type="password" placeholder="Enter password..." className="form-control" {...password}/>
                                    { password.touched && password.error && <div className="text-danger">
                                        <strong>Danger!</strong>{password.error}</div> }
                                </fieldset>
                            </div>
                            <div className="form-group ">
                                <fieldset>
                                    <label>Confirm password:</label>
                                    <input type="password" placeholder="Confirm password..." className="form-control" {...confirmPassword}/>
                                    { confirmPassword.touched && confirmPassword.error && <div className="text-danger">
                                        <strong>Danger!</strong>{confirmPassword.error}</div> }
                                </fieldset>
                            </div>
                            {this.renderAlert()}
                            <button type="submit" className="btn btn-success col-md-6 col-md-offset-3 btn-md">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(formProps) {
    const errors = {};
    if(!formProps.email) {
        errors.email = 'Please enter an email!';
    }
    if(!formProps.login) {
        errors.login = 'Please enter a login!';
    }
    if(!formProps.password) {
        errors.password = 'Please enter a password!';
    }
    if(formProps.password!==formProps.confirmPassword) {
        errors.password = 'Passwords must match!';
    }
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage:state.auth.error };
}

export default reduxForm({
    form: 'signup',
    fields: [ 'login', 'email', 'password', 'confirmPassword' ],
    validate
}, mapStateToProps, actions)(SignUp);
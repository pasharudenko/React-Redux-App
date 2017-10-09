import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            return (
                <div className="jumbotron">
                    <div className="row col-md-offset-5">
                        <div className="col-md-4 col-md-pull-4">
                        <Link to="/">Main page</Link>
                    </div>
                    <div className="col-md-4 col-md-pull-4">
                        <Link to="/projects">My Projects</Link>
                    </div>
                    <div className="col-md-4 col-md-pull-4">
                        <Link to="/signout">Sign Out</Link>
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="jumbotron">
                    <div className="row col-md-offset-5">
                        <div className="col-md-4 col-md-pull-4">
                            <Link to="/">Main Page</Link>
                        </div>
                        <div className="col-md-4 col-md-pull-4">
                            <Link to="/signin">Sign In</Link>
                        </div>
                        <div className="col-md-4 col-md-pull-4">
                            <Link to="/signup">Sign Up</Link>

                        </div>
                    </div>
                </div>
            )

        }
    }
    render () {
        return (
            this.renderLinks()
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);
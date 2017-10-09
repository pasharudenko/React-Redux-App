import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';

class SignIn extends Component {
    handleFormSubmit({ login,password }) {
        this.props.SignInUser({ login, password });
    }
    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        console.log(this.props.errorMessage);
        const { handleSubmit, fields:{ login, password } } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2 className="col-md-offset-3">Sign In Form!</h2>
                        <hr/>
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                            <div className="form-group">
                                <fieldset>
                                    <label>Login:</label>
                                    <input type="text" placeholder="Enter login..." className="form-control" {...login}/>
                                </fieldset>
                            </div>
                            <div className="form-group ">
                                <fieldset>
                                    <label>Password:</label>
                                    <input type="password" placeholder="Enter password..." className="form-control" {...password}/>
                                </fieldset>
                            </div>
                            {this.renderAlert()}
                            <button type="submit" className="btn btn-success col-md-6 col-md-offset-3 btn-md">Sign In!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage:state.auth.error };
}

export default reduxForm({
    form: 'SignIn',
    fields: ['login', 'password']
}, mapStateToProps, actions)(SignIn);
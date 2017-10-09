import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class SignOut extends Component {
    componentWillMount() {
        this.props.signOutUser();
    }
    render() {
        return (
          <div className="col-md-offset-5">
              Sorry to see you go...(
          </div>
        );
    }
}
export default connect(null, actions)(SignOut);
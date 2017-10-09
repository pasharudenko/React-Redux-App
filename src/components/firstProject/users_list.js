import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class UsersList extends Component {
    renderUsersList() {
        return this.props.users.map( (user) => {
            return(
                    <li
                        className="usersListLi col-md-offset-5"
                        key={user.id}
                        onClick={ () => {this.props.selectedUser(user)} }
                    >
                        {user.name}
                    </li>
            )
        })
    }
    render() {
        return (
            <ul>
                <h2 className="col-md-offset-3">List of some React developers...</h2>
                { this.renderUsersList() }
            </ul>
        )
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, actions)(UsersList);
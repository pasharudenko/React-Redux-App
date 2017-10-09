import React, { Component } from 'react';
import Header from '../header';
import UsersList from './users_list';
import UserDetails from './user_details';

export default class firstProject extends Component {
    render() {
        return (
            <div>
                <UsersList />
                <UserDetails/>
            </div>
        );
    }
}

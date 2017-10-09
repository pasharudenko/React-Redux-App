import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    renderSingleUser() {
     return <div>
         <ul>
             <li><img src={this.props.singleUser.photo} /></li>
             <li className="col-md-offset-3 usersLi1"><strong>Name:</strong>{this.props.singleUser.name}</li>
             <li className="col-md-offset-3 usersLi2"><strong>Age:</strong>{this.props.singleUser.age}</li>
             <li className="col-md-offset-3 usersLi3"><strong>Description:</strong>{this.props.singleUser.description}</li>
         </ul>
     </div>
    }
    render() {
        if(!this.props.singleUser) {
            return (
                <div className="col-md-offset-5">
                    Click on the name to get more info...
                </div>
            )
        }
        return (
            <div>{this.renderSingleUser()}</div>
        )
    }
}

function mapStateToProps({ singleUser }) {
    return { singleUser };
}

export default connect(mapStateToProps)(UserDetails);
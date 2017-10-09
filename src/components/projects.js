import React, { Component } from 'react';
import { Link } from 'react-router';
class Projects extends Component {
    render() {
        return (
            <div className="list-group">
                <h2 className="col-md-offset-4">List with all my projects</h2>
                <Link to="/firstproject" className="list-group-item">
                    My first project with Bucky Roberts
                </Link>
                <Link to="/youtubeapp" className="list-group-item">
                    Youtube
                </Link>
                <Link to="/WeatherApp" className="list-group-item">
                    Weather Forecast
                </Link>
                <Link to="/ReactRouterApp" className="list-group-item">
                    React - Router
                </Link>
            </div>
        )
    }
}
export default Projects;
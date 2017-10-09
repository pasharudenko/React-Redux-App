import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.featchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite city"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
            </form>
        )
    }
}

export default connect(null, actions)(SearchBar);
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
            <div className="form-group col-md-6 col-md-offset-3">
            <input
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              className="form-control"
              placeholder="Search for some videos..."
            />
          </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

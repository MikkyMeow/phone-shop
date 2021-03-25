import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPhone } from 'actions';

class Search extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event: React.ChangeEvent) => {
    this.setState({
      // @ts-ignore
      value: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    this.props.searchPhone(this.state.value);
  };

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhone,
};

export default connect(null, mapDispatchToProps)(Search);

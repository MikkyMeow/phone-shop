import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhones } from 'actions';

class Phones extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchPhones();
  }

  render() {
    return (
      <div>
        <h2>Phones</h2>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(null, mapDispatchToProps)(Phones);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhoneById } from 'actions';

class Phone extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchPhoneById(this.props.match.params.id);
  }
  render() {
    return <div>Phone</div>;
  }
}

const mapDispatchToProps = {
  // @ts-ignore
  fetchPhoneById,
};

export default connect(null, mapDispatchToProps)(Phone);

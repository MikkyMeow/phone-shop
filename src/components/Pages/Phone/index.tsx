import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import { addPhoneToBasket, fetchPhoneById } from 'actions';
import { getPhoneById } from 'selectors';
import BasketCart from 'components/elements/BasketCart';

class Phone extends Component {
  componentDidMount() {
    // @ts-ignore
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderField() {
    // @ts-ignore
    const { phone } = this.props;
    const columnField = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory',
      ])
    )(phone);

    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        {/* @ts-ignore */}
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  }

  renderContent() {
    // @ts-ignore
    const { phone } = this.props;

    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{this.renderField()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  renderSidebar() {
    // @ts-ignore
    const { phone, addPhoneToBasket } = this.props;

    return (
      <div>
        <p className="lead">Quick Shop</p>
        {/* @ts-ignore */}
        <BasketCart />
        <div className="form-group">
          <h1>{phone.name}</h1>
          <h2>${phone.price}</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          className="btn btn-success btn-block"
          type="button"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Add to cart
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {/* @ts-ignore */}
              {this.props.phone && this.renderContent()}
            </div>
            <div className="col-md-3">
              {/* @ts-ignore */}
              {this.props.phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// @ts-ignore
const mapStateToProps = (state) => {
  return {
    phone: getPhoneById(state, state.phonePage.id),
  };
};

const mapDispatchToProps = {
  // @ts-ignore
  fetchPhoneById,
  addPhoneToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);

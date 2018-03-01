import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as homePageActions } from '../../redux/modules/home';
import { homeSelector } from '../../redux/selectors/homeSelector';
import { Home } from '../../common/components/Home';

const mapStateToProps = state => ({
  ...homeSelector(state),
});

const mapDispatchToProps = {
  ...homePageActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class HomeView extends Component {
  static PropTypes = {
  }

  componentDidMount() {
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default HomeView;

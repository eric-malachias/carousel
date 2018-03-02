import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as actions from '../actions'

const App = ({actions, list}) => (
  <div>
    <MainSection actions={actions} list={list} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  list: state.list
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

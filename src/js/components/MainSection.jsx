import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from './Carousel'

export default class MainSection extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired
  }

  handleNext = () => {
    this.props.actions.nextImage()
  }
  handlePrevious = () => {
    this.props.actions.previousImage()
  }

  render () {
    const { list } = this.props

    return (
      <div className="main-section">
        <Carousel urls={list.data}
                  selected={list.selected}
                  onNext={this.handleNext}
                  onPrevious={this.handlePrevious} />
      </div>
    )
  }
}

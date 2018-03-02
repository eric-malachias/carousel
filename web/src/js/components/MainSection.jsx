import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from './Carousel'
import ToggleOptions from './ToggleOptions'

export default class MainSection extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired
  }

  handleChange = (options) => {
    this.props.actions.loadImageList(options.has('cats'), options.has('sharks'))
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
        <ToggleOptions  options={{ cats: 'Cats', sharks: 'Sharks' }}
                        onChange={this.handleChange} />
        <Carousel urls={list.data}
                  selected={list.selected}
                  loading={list.loading !== 0}
                  onNext={this.handleNext}
                  onPrevious={this.handlePrevious} />
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './loader.sass'

class Loader extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    parts: PropTypes.number.isRequired
  }

  render () {
    return (
      <div className={`loader parts-${this.props.parts} ${this.props.active ? 'active' : ''}`}>
        <div className="background" />
        {this.renderParts()}
      </div>
    )
  }
  renderParts () {
    const parts = []

    for (let index = 0; index < this.props.parts; index++) {
      parts.push(<div className={`part part-${index}`} key={index} />)
    }

    return parts
  }
}

export default Loader

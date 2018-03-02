import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToggleOptions extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired
  }

  handleClick = (key) => {
    const newValue = new Set(this.state.value)

    if (newValue.has(key)) {
      newValue.delete(key)
    } else {
      newValue.add(key)
    }

    this.setState({ value: newValue })

    this.props.onChange(newValue)
  }
  state = {
    value: new Set()
  }

  isSelected (key) {
    return this.state.value.has(key)
  }

  render () {
    return (
      <div className="toggle-options" style={{ margin: '10px 0', textAlign: 'center' }}>
        <div className="btn-group">
          {this.renderOptions()}
        </div>
      </div>
    )
  }
  renderOptions () {
    const options = []

    for (const key in this.props.options) {
      const title = this.props.options[key]
      const selected = this.isSelected(key)

      options.push(
        <button type="button"
                key={key}
                className={`btn btn-${selected ? 'primary' : 'secondary'}`}
                onClick={() => this.handleClick(key)}>{title}</button>
      )
    }

    return options
  }
}

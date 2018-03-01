import React, { PureComponent } from 'react'

class CarouselImage extends PureComponent {
  get className () {
    return [
      'carousel__image',
      this.isActive() ? 'active' : ''
    ].join(' ')
  }
  get style () {
    return {
      backgroundImage: `url(${this.props.url})`
    }
  }

  isActive () {
    return this.props.active
  }
  render () {
    return (
      <div className={this.className} style={this.style}></div>
    )
  }
}

export default CarouselImage

import React, { PureComponent } from 'react'

class CarouselImage extends PureComponent {
  get className () {
    return [
      'carousel__image',
      `carousel__image--index-${this.props.index}`
    ].join(' ')
  }
  get style () {
    return {
      backgroundImage: `url(${this.props.url})`
    }
  }

  render () {
    return (
      <div className={this.className} style={this.style}></div>
    )
  }
}

export default CarouselImage

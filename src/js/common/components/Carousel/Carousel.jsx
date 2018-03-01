import React, { PureComponent } from 'react'
import CarouselImage from './CarouselImage'
import './carousel.css'

class Carousel extends PureComponent {
  get count () {
    return this.list.length
  }
  get list () {
    return Array.isArray(this.props.list) ? this.props.list : []
  }

  isEmpty () {
    return this.count === 0
  }
  render () {
    if (this.isEmpty()) {
      return this.renderEmpty()
    }

    return this.renderWithImages()
  }
  renderEmpty () {
    return (
      <div className="carousel">No images...</div>
    )
  }
  renderImage (url) {
    return (
      <CarouselImage key={url} url={url} />
    )
  }
  renderImages () {
    return this.list.map(url => this.renderImage(url))
  }
  renderWithImages () {
    const images = this.renderImages()

    return (
      <div className="carousel">
        {images}
      </div>
    )
  }
}

export default Carousel

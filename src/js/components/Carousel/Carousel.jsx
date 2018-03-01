import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CarouselImage from './CarouselImage'
import './carousel.sass'

class Carousel extends PureComponent {
  static propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    urls: PropTypes.array.isRequired
  }

  get count () {
    return this.props.urls.length
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
  renderImage (url, index) {
    return (
      <CarouselImage key={url} url={url} index={index} />
    )
  }
  renderImages () {
    return this.props.urls.map((url, index) => this.renderImage(url, index))
  }
  renderWithImages () {
    const images = this.renderImages()

    return (
      <div className={`carousel carousel--selected-${this.props.selected}`}>
        {images}
        <div className="carousel__prev" onClick={() => this.props.onPrevious()} />
        <div className="carousel__next" onClick={() => this.props.onNext()} />
      </div>
    )
  }
}

export default Carousel

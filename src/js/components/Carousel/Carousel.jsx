import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CarouselImage from './CarouselImage'
import Loader from '../Loader'
import './carousel.sass'

class Carousel extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
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
  isLoading () {
    return this.props.loading
  }

  render () {
    if (this.isEmpty()) {
      return this.renderEmpty()
    }

    return this.renderWithImages()
  }
  renderEmpty () {
    return (
      <div className="carousel no-images">
        <Loader active={this.isLoading()} parts={3} />
        <span>No images...</span>
      </div>
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
      <div className={`carousel selected-${this.props.selected}`}>
        <Loader active={this.isLoading()} parts={3} />
        {images}
        <div className="previous" onClick={() => this.props.onPrevious()} />
        <div className="next" onClick={() => this.props.onNext()} />
        <div className="image-index">{`Showing image ${this.props.selected + 1} of ${this.count}`}</div>
      </div>
    )
  }
}

export default Carousel

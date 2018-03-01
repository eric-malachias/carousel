import React, { PureComponent } from 'react'
import CarouselImage from './CarouselImage'
import './carousel.sass'

class Carousel extends PureComponent {
  get count () {
    return this.list.length
  }
  get list () {
    return Array.isArray(this.props.list) ? this.props.list : []
  }

  state = {
    selectedImage: 0
  }

  isEmpty () {
    return this.count === 0
  }
  next () {
    this.select(1)
  }
  previous () {
    this.select(-1)
  }
  select (inc) {
    this.setState({
      selectedImage: (this.count + this.state.selectedImage + inc) % this.count
    })
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
    return this.list.map((url, index) => this.renderImage(url, index))
  }
  renderWithImages () {
    const images = this.renderImages()

    return (
      <div className={`carousel carousel--selected-${this.state.selectedImage}`}>
        {images}
        <div className="carousel__prev" onClick={() => this.previous()} />
        <div className="carousel__next" onClick={() => this.next()} />
      </div>
    )
  }
}

export default Carousel

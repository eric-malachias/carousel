import React, { PureComponent } from 'react'
import { Carousel } from './../Carousel'

class Home extends PureComponent {
  get list () {
    return [
      'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
      'https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg',
      'https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg',
      'https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg',
      'https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg'
    ]
  }
  render () {
    return (
      <div className="home__output">
        <Carousel list={this.list} />
      </div>
    )
  }
}

export default Home

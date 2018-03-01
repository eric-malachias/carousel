import { LOAD_IMAGE_LIST, NEXT_IMAGE, PREVIOUS_IMAGE } from '../constants/ActionTypes'

const initialState = {
  data: [
    'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
    'https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg',
    'https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg',
    'https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg',
    'https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg'
  ],
  loading: false,
  selected: 0
}

export default function list (state = initialState, action) {
  if (state.loading) {
    return state
  }

  switch (action.type) {
    case LOAD_IMAGE_LIST:
      // @todo
      return state
    case NEXT_IMAGE:
      return {
        data: state.data,
        loading: false,
        selected: (state.selected + 1) % state.data.length
      }
    case PREVIOUS_IMAGE:
      const previous = state.selected - 1
      return {
        data: state.data,
        loading: false,
        selected: previous >= 0 ? previous : previous + state.data.length
      }

    default:
      return state
  }
}

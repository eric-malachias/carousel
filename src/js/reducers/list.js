import * as ActionTypes from '../constants/ActionTypes'
import { receiveImageList, requestImageList } from '../actions'

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
  console.info('Action detected:', action)

  switch (action.type) {
    case ActionTypes.NEXT_IMAGE:
      return {
        data: state.data,
        loading: false,
        selected: (state.selected + 1) % state.data.length
      }
    case ActionTypes.PREVIOUS_IMAGE:
      const previous = state.selected - 1
      return {
        data: state.data,
        loading: false,
        selected: previous >= 0 ? previous : previous + state.data.length
      }
    case ActionTypes.RECEIVE_IMAGE_LIST:
      return {
        data: action.urls,
        loading: false,
        selected: 0
      }
    case ActionTypes.REQUEST_IMAGE_LIST:
      return {
        data: state.data,
        loading: true,
        selected: state.selected
      }

    default:
      return state
  }
}

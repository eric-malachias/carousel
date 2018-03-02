import * as ActionTypes from '../constants/ActionTypes'
import { receiveImageList, requestImageList } from '../actions'

const initialState = {
  data: [],
  loading: 0,
  selected: 0
}

export default function list (state = initialState, action) {
  console.info('Action detected:', action)

  switch (action.type) {
    case ActionTypes.NEXT_IMAGE:
      return {
        data: state.data,
        loading: state.loading,
        selected: (state.selected + 1) % state.data.length
      }
    case ActionTypes.PREVIOUS_IMAGE:
      const previous = state.selected - 1
      return {
        data: state.data,
        loading: state.loading,
        selected: previous >= 0 ? previous : previous + state.data.length
      }
    case ActionTypes.RECEIVE_IMAGE_LIST:
      return {
        data: action.urls,
        loading: state.loading - 1,
        selected: 0
      }
    case ActionTypes.REQUEST_IMAGE_LIST:
      return {
        data: state.data,
        loading: state.loading + 1,
        selected: state.selected
      }

    default:
      return state
  }
}

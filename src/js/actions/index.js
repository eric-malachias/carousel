import * as types from '../constants/ActionTypes'
import { API_URL } from '../constants/Server'

export const nextImage = () => ({ type: types.NEXT_IMAGE })
export const previousImage = () => ({ type: types.PREVIOUS_IMAGE })
export const receiveImageList = (urls) => ({ type: types.RECEIVE_IMAGE_LIST, urls })
export const requestImageList = (cats, sharks) => ({ type: types.REQUEST_IMAGE_LIST, cats, sharks })
export const loadImageList = (cats, sharks) => {
  return dispatch => {
    dispatch(requestImageList(cats, sharks))

    fetch(`${API_URL}/images?cats=${!!cats}&sharks=${!!sharks}`)
      .then(response => response.json())
      .then(list => dispatch(receiveImageList(list)))
  }
}

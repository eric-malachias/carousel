import * as types from '../constants/ActionTypes'

export const nextImage = () => ({ type: types.NEXT_IMAGE })
export const previousImage = () => ({ type: types.PREVIOUS_IMAGE })
export const receiveImageList = (urls) => ({ type: types.RECEIVE_IMAGE_LIST, urls })
export const requestImageList = (cats, sharks) => ({ type: types.REQUEST_IMAGE_LIST, cats, sharks })
export const loadImageList = (cats, sharks) => {
  return dispatch => {
    dispatch(requestImageList(cats, sharks))

    function _fetch () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve([]), 2000)
      })
    }

    // @todo
    // fetch('...')
    _fetch('...')
      .then(list => receiveImageList(list))
  }
}

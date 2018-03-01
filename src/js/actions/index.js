import * as types from '../constants/ActionTypes'

export const loadImageList = (cats, sharks) => ({ type: types.LOAD_IMAGE_LIST, cats, sharks })
export const nextImage = () => ({ type: types.NEXT_IMAGE })
export const previousImage = () => ({ type: types.PREVIOUS_IMAGE })

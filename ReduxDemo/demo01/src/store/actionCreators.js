import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://mock.cangdu.org/mock/5e9b1b28c52eaf59b709f881/ReactDemo01/getList')
      .then((res) => {
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})
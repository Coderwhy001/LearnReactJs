import React from 'react';
import {connect} from 'react-redux'

const TodoList = (props) => {
  let { inputValue, inputChange, clickBtn, deleteItem, list } = props
    return ( 
      <div>
        <div>
          <input 
          value={inputValue} 
          onChange={inputChange}
          />
          <button onClick={clickBtn}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index) => {
              return (
                <li key={index} onClick={()=>{deleteItem(index)}}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
     );
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => { // 映射 共享状态
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickBtn () {
      let action = { type: 'add_item' }
      dispatch(action)
    },
    deleteItem (index) {
      let action = {
        type: 'delete_item',
        index: index
      }
      dispatch(action)
    }
  }
}
export default connect(stateToProps,dispatchToProps)(TodoList);
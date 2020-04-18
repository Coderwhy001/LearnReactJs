import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:['基础按摩','精油推背']
    }
  }
  render() {
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="xiao">增加服务:</label>
          <input 
              id="xiao" 
              className="input" 
              value={this.state.inputValue} 
              onChange={this.inputChange.bind(this)}
              ref = {(input)=>{this.input=input}} 
          /> 
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {
            this.state.list.map((item,index) => {
              return (
                  <XiaojiejieItem
                      key={index+item}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                  />
                
                // <li 
                //     key={index+item}
                //     onClick={this.deleteItem.bind(this,index)}
                //     dangerouslySetInnerHTML={{__html:item}} 
                //     // 解析html标签
                // >
                // </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(){
    // console.log(this)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: this.input.value
    })
  }
  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue: ''
    },()=>{
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index){
    console.log(index)
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default Xiaojiejie
import React,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:[]
    }
  }

  componentDidMount(){
    axios.get('https://mock.cangdu.org/mock/5e5370e027f1ca4d62175802/example/xiaojiejie')
      .then((res)=>{
        console.log('axios 获取数据成功'+JSON.stringify(res))
        this.setState({
          list: res.data.data
        })
      })
      .catch((error)=>{console.log('axios 获取数据失败' + error)})
  }
  
  // componentWillMount(){
  //   console.log('componentWillMount---组件将要挂载到页面的时刻')
  // }

  // componentDidMount(){
  //   console.log('componentDidMount---组件挂在完成的时刻')
  // }

  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate---组件更新之前')
  //   return true
  // }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }
  render() {
    // console.log('挂载中')
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
        <Boss/>
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
      // console.log(this.ul.querySelectorAll('li').length)
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
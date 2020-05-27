import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      list: [
        {cid:123, title: 'codewhy的个人博客1'},
        {cid:456, title: 'codewhy的个人博客2'},
        {cid:789, title: 'codewhy的个人博客3'},
      ]
    }
    this.props.history.push("/home/")// 重定向的编程式写法
    console.log(this.props)
  }
  render() { 
    return ( 
      <div>
        {/* <Redirect to="/home/" /> */}
        <h2>xiao.com</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>

     );
  }
}
 
export default Index;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
  constructor(props){
    super(props) // 更改this指向
    this.handleClick = this.handleClick.bind(this)
  }
  state = {  }
  render() { 
    return ( 
    <li onClick={this.handleClick}>
     {this.props.avname}为你服务-{this.props.content}
    </li>
     );
  }

  handleClick() {
    // this.props.list = []
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes={
  avname: PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
  avname:'松岛枫'
}

export default XiaojiejieItem;
import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log(`111${this.state.count}`)
  }
  componentDidUpdate() {
    console.log(`222${this.state.count}`)
  }
  render() { 
    return ( 
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.addCount.bind(this)}>按钮</button>
        </div>
     );
  }
  addCount() {
    this.setState({count: this.state.count+1})
  }
}
 
export default Example3;
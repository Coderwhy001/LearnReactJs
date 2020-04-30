import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect(() => {
    console.log('useEffect=> Index页面')
    return () => {
      console.log('老弟你走了 Index')
    }
  }, [])
  return <h2>wuyueblog.com</h2>
}
function List () {
  useEffect(() => {
    console.log('useEffect=> List页面')
  })
  return <h2>List page</h2>
}
function Example() {
  const [ count, setCount ] = useState(0) // 数组解构
  useEffect(() => {
    console.log(`useEffect=>${count}`)
    return () => {
      console.log('=======')
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count+1)}}>按钮</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List} />
      </Router>
    </div>
  )
}
 
export default Example;
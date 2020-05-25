import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import DogShow from './components/DogShow'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
const style = {
  width: 200
}
const DogShowWithHook = () => {
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  return (
    <>
      {loading ? <p>狗狗读取中</p> : <img src={data && data.message} alt="dog" style={style}/>}
    </>
  )

}
const CatShowWithHook = () => {
  const [category, setCategory] = useState('1')
  const [ data, loading ] = useURLLoader(`https://cdn2.thecatapi.com/images/7ie.jpg`)
  return (
    <>
      {loading ? <p>猫猫读取中</p> : <img src="https://cdn2.thecatapi.com/images/7ie.jpg" alt="cat" style={style}/>}
      {/* <button onClick={() => {setCategory(category === 5 ? setCategory('1') : setCategory(category + 1))}}>按钮</button> */}
      <button onClick={() => { setCategory('2')}}>帽子</button>
    </>
    
  )
}
function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{position.x}</h1>
        <LikeButton />
        {/* <DogShow /> */}
        <MouseTracker />
        {/* <DogShowWithHook /> */}
        <CatShowWithHook />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

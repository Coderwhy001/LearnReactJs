import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition'
import axios from 'axios'
const LikeButton = () => {
  const position = useMousePosition()
  const [like, setLike] = useState(0)
  useEffect(() => {
    document.title = `点击了${like}`
  })
  return (
    <button onClick={() => {setLike(like+1)}}>
      {like}
      {position.y}
    </button>
  )
}

export default LikeButton
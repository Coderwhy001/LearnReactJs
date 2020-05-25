import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const updatemouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }
    document.addEventListener('mousemove', updatemouse)
    return () => {
      document.removeEventListener('mousemove', updatemouse)
    }
  })
  return (
  <p>X: {position.x}, Y: {position.y}</p>
  )

}

export default MouseTracker
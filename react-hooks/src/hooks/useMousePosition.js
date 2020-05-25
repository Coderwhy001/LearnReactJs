import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
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
  return position
}

export default useMousePosition
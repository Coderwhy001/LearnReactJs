import React, { useRef, useState, useEffect } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const onBtn = () => {
    inputEl.current.value = "Hello, jspang"
    console.log(inputEl)
  }
  const [text, setText] = useState('jspang')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log('111', textRef.current)
  })


  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onBtn}>在input上展示文字</button>
      <br/>
      <input value={text} onChange={(e) => {
        setText(e.target.value)
      }}/>
    </>
  )
}

export default Example8
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useURLLoader = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url)
    .then(result => {
      console.log(result.data)
      setData(result.data)
      setLoading(false)
    })
    .catch(err => {
      console.log('失败了', err)
    })
  }, [url])
  return [data, loading]
}
export default useURLLoader
import React, { useState, useEffect } from 'react'

const ScrollProps = (props) => {
  const [position, setPosition] = useState(0)
  function onScroll() {
    setPosition(window.scrollY)
    // console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return <></>
}

export default ScrollProps

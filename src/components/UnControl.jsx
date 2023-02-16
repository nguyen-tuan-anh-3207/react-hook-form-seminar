import React, { useRef } from 'react'

const UnControl = () => {
  const inputRef = useRef(null)

  const inputValue = inputRef?.current?.inputValue

  console.log('inputValue :>> ', inputValue)

  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default UnControl

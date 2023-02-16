import React, { useState } from 'react'

const Control = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  )
}

export default Control

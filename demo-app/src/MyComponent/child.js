import React from 'react'

export default function child(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('child')}>Click child button</button>
    </div>
  )
}

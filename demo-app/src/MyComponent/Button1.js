import React from 'react'

export default function Button1() {
    function functionalClick(){
        console.log('clicked')
    }
  return (
    <div>
      <hr />
        <h3>function click Button.</h3>
        <button className='btn btn-primary' onClick={functionalClick}>Button 1</button>
    </div>
  )
}

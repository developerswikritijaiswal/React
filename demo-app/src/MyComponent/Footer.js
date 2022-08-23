import React from 'react'

export default function Footer() {
  const divStyle = {
    backgroundColor: '#000',
    color:'#fff',
    textAlign:'center',
  };
  return (
    <footer className='footer p-2'  style={divStyle}>
      <div className='container'>
          <p className='m-0'> Copyright © 2021</p>
      </div>
  </footer>
  )
}

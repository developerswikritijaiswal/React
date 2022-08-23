import React from 'react'
import InnerItems from './innerItems'
export default function Inner(props) {
  return (
    <div className='container'>
      <div className=' p-4 '>
        <h4 className='mb-5'>List of Items</h4>
        <div className='row text-center'>
          {props.list.length===0 ? 'NO LISTS FOUND!' : 
          props.list.map((list)=>{
            return <InnerItems todo={list} key={list.sNo} onDeleteBtn={props.onDelete}/>
          })
          }
        </div>
      </div>
    </div>
  )
}

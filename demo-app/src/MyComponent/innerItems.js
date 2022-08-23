import React from 'react'

export default function innerItems({todo, onDeleteBtn}) {
    const colorSno={
        color:'red',
    }
  return (
        <div className='col-6'>
            <div className="card mb-4">
                <div className="card-body">

                    <h3 className="card-title"><span style={colorSno}>{todo.sNo}.</span>{todo.Title}</h3>
                    <p className="card-text">{todo.Discription}</p>
                    <button className='btn btn-danger' onClick={()=>onDeleteBtn(todo)}>Delete</button>
                    <button className='btn btn-success ms-3'>Add</button>
                </div>
            </div>
        </div>
  )
}

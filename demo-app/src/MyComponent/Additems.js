import React from 'react'
import { useState } from "react";

export default function Additems(props) {
    const [title, settitle] = useState('')
    const [desp, setdesp] = useState('')
    const submit =(e)=> {
        e.preventDefault();
        if(!title || !desp ){
            alert('The Title and Description should not be Blank!')
        }else{ props.onAdd(title, desp);}
       
    }
    return (
        <section className='container p-5'>
            <h4>Add Items</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desp" className="form-label">Discription</label>
                    <input type="text" value={desp} onChange={(e)=>setdesp(e.target.value)} className="form-control" id="desp"/>
                </div>
                <button type="submit" className="btn btn-success" onClick={submit}>Submit</button>
            </form>
        </section>
    )
}

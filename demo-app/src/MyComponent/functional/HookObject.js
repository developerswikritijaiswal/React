import React, { useState } from "react";

const HookObject = (props) => {
    const [name, setMethod] = useState({ firstName: "", LastName: "" });
    // const [fullName, setMethodName] = useState({ firstName: "", LastName: "" });
  
    return (
        <div>
            <div className="mb-3">
                <label  className="form-label">firstName </label>
                <input type="text" value={name.firstName} onChange={(e) => setMethod({...name, firstName: e.target.value })}></input>
            </div>
            <div className="mb-3">
                <label  className="form-label">LastName </label>
                <input type="text" value={name.LastName} onChange={(e) => setMethod({...name, LastName: e.target.value })}></input>
            </div>
            
            <p>Name: {name.firstName} {name.LastName}</p>

            {/* <div className="mb-3">
                <label  className="form-label">firstName </label>
                <input type="text" value={fullName.firstName} onChange={(e) => setMethodName(e.target.value )}></input>
            </div>
            <div className="mb-3">
                <label  className="form-label">LastName </label>
                <input type="text" value={fullName.LastName} onChange={(e) => setMethodName(e.target.value )}></input>
            </div>
            <p>Name: {fullName.firstName} {fullName.LastName}</p>
            <button onClick={()=>setMethodName(...fullName)}>Click</button> */}
        </div>
    );
};

export default HookObject;

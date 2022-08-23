import React, { useState } from "react";
import HookObject from "./HookObject";

const FunctionClick = (props) => {
    const initialValue = 0;
    const imgUrl = "https://source.unsplash.com/user/c_v_r";
    const [count, setMethod] = useState(initialValue);
    const [name1, setMethodName] = useState('');
    const [img, setMethodImage] = useState(
        "https://i.picsum.photos/id/360/200/300.jpg?hmac=Fl1CgUfxrFjmcS1trYDG80XpEjYixcXfc2uTtCxFkDw"
    );

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setMethod((prevCount) => prevCount + 1);
        }
    };
    const clickFunction = (e) => {
        console.log(name1);
        setMethodName({
            name1: name1.value,
        })
    }
    return (
        <>
            <div className="left">
                <h2>Functional Click</h2>
                <p>count: {count}</p>
                <div className="img-main">
                    <img src={img} alt="img" className="img-fluid"></img>
                </div>
                <button onClick={() => setMethod(initialValue)}>reset</button>
                {/* <button onClick={()=>setMethod(count + 1)}>increment</button>  Note: don't use count in this always use prevcount like below:-   */}
                <button onClick={() => setMethod((prevCount) => prevCount + 1)}>
                    increment
                </button>
                <button onClick={() => setMethod((prevCount) => prevCount - 1)}>
                    decrement</button>
                <button onClick={incrementFive}>increment Five </button>
                <button onClick={() => setMethodImage(imgUrl)}>show image</button>
                <div className="mb-3">
                    <label className="form-label">firstName </label>
                    <input type="text" value={name1} onChange={(e) => setMethodName(e.target.value)}></input>
                    <button onClick={clickFunction}>click</button>
                    <p>{name1}</p>
                </div>
                <div className="mt-5">
                    <h2>Hooks Object</h2>
                    <HookObject />
                </div>
            </div>

        </>
    );
};

export default FunctionClick;

import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(props){
        super(props);
        this.state={
            heading:'Class Click',
            initialvalue:0,
            img:'https://i.picsum.photos/id/360/200/300.jpg?hmac=Fl1CgUfxrFjmcS1trYDG80XpEjYixcXfc2uTtCxFkDw'
        }
    }
    resetClick(){
        this.setState({
            initialvalue: 0,
        })
    }
    increment(){
        this.setState((prevState,props)=>({
            // initialvalue: this.state.initialvalue + 1,      Note: don't use count in this always use prevcount like below:-
            initialvalue : prevState.initialvalue + 1,
        }));
    }
    decrement(){
        this.setState((prevState, props)=>({
            initialvalue : prevState.initialvalue - 1,
        }))
    }
    incrementFive(){
        for(let i=0;i<5;i++){
            this.setState((prevState, props)=>({
                initialvalue: prevState.initialvalue + 1,
            }))
        }
    }
    imageShow(){
        this.setState({
            img: 'https://source.unsplash.com/user/c_v_r'
        })
    }
  render() {
    return (
      <>
        <div className='right'>
            <h2>{this.state.heading}</h2>
            <p>count:{this.state.initialvalue}</p>
            <div className="img-main">
                <img src={this.state.img} alt="img" className="img-fluid"></img>
            </div>
            <button onClick={() => this.resetClick()}>reset</button>
            <button onClick={() => this.increment()}>increment</button>
            <button onClick={() => this.decrement()}>decrement</button>
            <button onClick={() => this.incrementFive()}>increment five</button>
            <button onClick={() => this.imageShow()}>show image</button>
        </div>
      </>
    )
  }
}

export default ClassClick;

import React, { Component } from 'react'
import Child from './child';
export default class parent extends Component {
    constructor(){
        super();
        this.state ={
            message:'Parent'
        }
    }
    greetParent = (type)=>{
        alert(`Hello ${this.state.message} from ${type}` );
    }
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}></Child>
      </div>
    )
  }
}

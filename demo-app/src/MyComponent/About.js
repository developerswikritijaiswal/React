import React, { Component } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
export default class About extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      items: [
        { id: 1, fname: "swikriti", lname: "jaiswal" },
        { id: 2, fname: "jagriti", lname: "jaiswal" },
      ],
    };
  }
  clickButton() {
    this.setState({
      counter: this.state.counter + 1
    },()=>{
      console.log(this.state.counter);
    })
    // this.setState((prevState)=>({
    //   counter: prevState.counter + 1
    // }))
    // this.setState({
    //   fname: "swik",
    // });
  }
  // onclickButton(){
  //   this.clickButton();
  //   this.clickButton();
  //   this.clickButton();
  //   this.clickButton();
  //   this.clickButton();
  // }

  render() {
    return (
      <div className="container p-4 text-center">
        <p>
          <b>{this.props.count}</b> : {this.state.counter}
        </p>
        {this.state.items.map((item) => (
          <p id={item.id} key={item.id}>
            {item.fname} {item.lname}
          </p>
        ))}
        <button className="btn btn-success" onClick={() => this.clickButton()}>
          Click
        </button>
        <Button1/>
        <Button2/>
      </div>
      
    );
  }
}

import React, { Component } from "react";

export default class Button2 extends Component {
  constructor() {
    super();
    this.state = {
      messagae: "Hello React!",
    };
    this.handlClickM3 = this.handlClickM3.bind(this);
  }
  handlClickM1() {
    this.setState({
      messagae: "React JS method 1",
    });
    console.log('method 1');
  }
  handlClickM2(){
    this.setState({
        messagae: "React JS method 2",
      });
      console.log('method 2');
  }
  handlClickM3() {
    this.setState({
      messagae: "React JS method 3",
    });
    console.log('method 3');
  }
  handlClickM4 = ()=>{
    this.setState({
        messagae: "React JS method 4",
      });
      console.log('method 4');
  }
  render() {
    return (
      <div className="mt-3">
          <hr />
        <h3>Class component event Handle</h3>
        <p>{this.state.messagae}</p>
        <button className="btn btn-secondary mx-2" onClick={this.handlClickM1.bind(this)}>method 1</button>
        <button className="btn btn-secondary mx-2" onClick={()=>this.handlClickM2()}>method 2</button>
        <button className="btn btn-secondary mx-2" onClick={this.handlClickM3}>method 3</button>
        <button className="btn btn-secondary mx-2" onClick={this.handlClickM4}>method 4</button>
      </div>
    );
  }
}

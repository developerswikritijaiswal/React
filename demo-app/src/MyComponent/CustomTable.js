import React, { Component } from "react";
import CustomModal from "./CustomModal";
export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    // this.showModal = this.showModal.bind(this);
    this.state = {
        age:false,
         showModal: false,
      items: [
        {
          sno: "1",
          name: "swikriti1",
          email: "swikriti@gmail.com",
          phone: "9876543210",
          age: 22,
        },
        {
          sno: "2",
          name: "swikriti2",
          email: "swikriti@gmail.com",
          phone: "9876543210",
          age:23,
        },
        {
          sno: "3",
          name: "swikriti3",
          email: "swikriti@gmail.com",
          phone: "9876543210",
          age:24,
        },
      ],
    };
  }
  showModal(){
    console.log('hie');
    this.setState({ showModal: true });
  }
  closeModel = ()=>{
    console.log('close1')
    this.setState({
      showModal: false,  
    });
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, i) => (
              <tr key={i}>
                <th>{item.sno}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                {this.state.age?<td>{item.age}</td>: <td></td>}
                <td>
                  <button
                    className="btn btn-success"
                    onClick={()=>this.showModal()}>Edit</button>
                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomModal show={this.state.showModal} closeButton={this.closeModel}></CustomModal>
      </div>
    );
  }
}

import React, { Component } from 'react'
import axios from 'axios'
export default class signup extends Component {
    constructor(){
        super();
        this.state = {
            Fullname:"",
            Mobile:"",
            email:"",
            password:"",
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitBtn=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/SignUp', this.state).then(response =>{
            console.log(response);
            this.props.history.push("/login");
        }).catch(err=>{
            console.log('err----',err);
        })
    }
    render() {
        return (
            <div className='main'>
                <form onSubmit={this.submitBtn}> 
                   <div className='mainForm'>
                        <h3 className='text-center'>Signup Form</h3>
                        <hr/>
                        <div className="mb-3">
                            <label htmlFor="Fullname" className="form-label">Fullname</label>
                            <input type="text"  className="form-control" id="Fullname" name='Fullname' value={this.state.Fullname}  onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Mobile" className="form-label">Mobile</label>
                            <input type="number"  className="form-control" id="Mobile" name='Mobile' value={this.state.Mobile} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"  className="form-control" id="email" name='email' value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"  className="form-control" id="password" name='password' value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3 text-center">
                            <button type='submit' className='btn btn-success'>Signup</button>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}

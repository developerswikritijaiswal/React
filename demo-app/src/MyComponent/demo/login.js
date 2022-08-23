import React, { Component } from 'react'
import axios from 'axios'
export default class login extends Component {
    constructor(){
        super();
        this.state = {
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
        axios.get('http://localhost:3000/SignUp').then(response =>{
            console.log(response);
            // console.log(a.length? a.map(b => b.email):null);
        }).catch(err=>{
            console.log('err----',err);
        })
    }
    render() {
       

        return (
            <div className='main'>
                <form onSubmit={this.submitBtn}> 
                   <div className='mainForm'>
                        <h3 className='text-center'>Login Form</h3>
                        <hr/>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"  className="form-control" id="email" name='email' value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"  className="form-control" id="password" name='password' value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3 text-center">
                            <button type='submit' className='btn btn-success'>Login</button>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}

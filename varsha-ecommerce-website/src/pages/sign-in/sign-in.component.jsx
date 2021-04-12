import React, { Component } from 'react'
import { CustomButton } from '../custom-button/custom-buttom.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in.component.scss'
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
    handlesubmit =  event => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    handleChange=  event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <FormInput name="email" type="email" 
                    handleChange={this.handleChange} 
                    label="Email"
                    value={this.state.email} required />
                    
                    <FormInput name="password"  label="Passowrd" 
                    handleChange={this.handleChange} 
                    type="password" value={this.state.password}
                     required />
                    
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

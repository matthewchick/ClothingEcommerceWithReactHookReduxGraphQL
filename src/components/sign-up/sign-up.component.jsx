import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const{ displayName, email, password, confirmPassword} = this.state;
        if (password != confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {

        }
    }
    HandleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value}); 
    }

    render() {
        const{ displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" 
                        type="text" 
                        value = {displayName} 
                        onChange={this.HandleChange} 
                        label='Display Name'
                        required/>     
                    <FormInput name="email" 
                        type="email" 
                        value = {email} 
                        onChange={this.HandleChange} 
                        label='Email'
                        required/>     
                    <FormInput name="password" 
                        type="password" 
                        value = {password} 
                        onChange={this.HandleChange} 
                        label='Password'
                        required/>     
                    <FormInput name="confirmPassword" 
                        type="password" 
                        value = {confirmPassword} 
                        onChange={this.HandleChange} 
                        label='Confirm password'
                        required/>  
                    <CustomButton type='submit'>Sign Up</CustomButton>   
                </form>
            </div>
        )
    }
}  

export default SignUp;
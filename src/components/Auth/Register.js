import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducer';
import FrontNav from '../Nav/FrontNav';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            signedIn: false
        };
    };

    handleUsernameChange = (e) => {
        this.setState({
          username: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
          password: e.target.value
        })
    }

    handleRegister = () => {
        let result = axios.post('/api/register/', {
          username: this.state.username,
          password: this.state.password
        })
        console.log(result)
        this.props.loginUser(result.data)
        this.handleRedirect()
    }

    handleLogin = () => {
        axios.post('/api/login/', {
          username: this.state.username,
          password: this.state.password
        }).then(res => {
            this.props.loginUser(res.data)
            this.handleRedirect()
        }).catch(err => { console.log('Unable to login') })
    }

    handleRedirect = () => {
        console.log(this.props)
        this.props.history.push('/dashboard');
    }

    render() {
        console.log(this.props)
        return(
            <div className="Register">
                <FrontNav />
                <div className="Register-Box">
                    <h1>Register Page</h1>
                    <div>
                        <input type="text" placeholder="Username"onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="buttons">
                    </div>
                        <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {loginUser}) (Register)
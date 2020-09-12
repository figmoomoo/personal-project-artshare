import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../ducks/reducer';


class Login extends Component{
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
            <div className="Auth">
                <div className="Auth-Box">
                    <img src="https://cdn.discordapp.com/attachments/718455188100350035/754221271360733184/AH_Login.png" style={{height: 60}}/>
                    <div className="auth-input">
                        <input type="text" placeholder="Username"onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="auth-input">
                        <input type="password" placeholder="Password"onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="buttons">
                    </div>
                        <button onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {loginUser}) (Login)
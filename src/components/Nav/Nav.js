import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser, getUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component{
    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.get('/api/logout').then( res => {
            this.props.logoutUser();
            // this.props.history.push('/');
        }).catch(err => console.log(err))
    }

    render(props){
        return<div>
            <button>Profile</button>
            <button>Submit</button>
            <button onClick={this.logout}><Link to="/">Logout</Link></button>
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
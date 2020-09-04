import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser, getUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component{
    logout = () => {
        axios.get('/api/logout').then( res => {
            this.props.logoutUser();
            // this.props.history.push('/');
        }).catch(err => console.log(err))
    }

    render(props){
        return<div>
            <button><Link to="/dashboard">Logo</Link></button>
            <button><Link to={`/profile/${this.props.user.user_id}`}>Profile</Link></button>
            <button><Link to="/submit">Submit</Link></button>
            <button onClick={this.logout}><Link to="/">Logout</Link></button>
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
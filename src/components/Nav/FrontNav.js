import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser, getUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component{
    componentDidMount(){
        this.props.getUser();
    }

    render(props){
        return<div>
            <button><Link to="/register">Register</Link></button>
            <button><Link to="/login">Login</Link></button>
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
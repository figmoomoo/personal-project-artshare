import React, { Component } from 'react'
import styles from '../../css/styles.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser, getUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component{
    componentDidMount(){
        this.props.getUser();
    }

    render(props){
        return(
        <div className="NavClass">
            <Link to="/">
                <img src="https://cdn.discordapp.com/attachments/718455188100350035/753545483095375942/ArtHaven_logo.png" style={{height: 200}}/>
            </Link>
            <div className= "NavButtons">
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/login">Login</Link></button>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
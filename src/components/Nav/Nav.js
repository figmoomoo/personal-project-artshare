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
        return<div className="NavClass">
            <Link to="/dashboard">
                <img src="https://cdn.discordapp.com/attachments/718455188100350035/753545483095375942/ArtHaven_logo.png" style={{height: 200}}/>
            </Link>
            <div className= "NavButtons">
                <button><Link to={this.props.user?`/profile/${this.props.user.user_id}`:"/dashboard"}>Profile</Link></button>
                <button><Link to="/submit">Submit</Link></button>
                <button onClick={this.logout}><Link to="/">Logout</Link></button>
            </div>
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
import React, { Component } from 'react'
import styles from '../../css/styles.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser, getUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            showNav: false,
        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    showNav = (event) => {
        event.preventDefault();
        this.setState({
            showNav: !this.state.showNav,
        });
    }

    render(props){
        return(
            <div className="NavClass">
                <Link to="/">
                    <img className="logo" src="https://cdn.discordapp.com/attachments/718455188100350035/753545483095375942/ArtHaven_logo.png" />
                </Link>
                <div>
                    <div className="desktop-nav">
                        <div className= "NavButtons">
                            <button><Link to="/register">Register</Link></button>
                            <button><Link to="/login">Login</Link></button>
                        </div>
                    </div>
                    
                </div>
                <div className="mobile-dropdown">
                    <button onClick={this.showNav}>Menu</button>
                    {this.state.showNav ? (
                    <div className="mobile-nav">
                        <div className= "NavButtons">
                            <button><Link to="/register">Register</Link></button>
                            <button><Link to="/login">Login</Link></button>
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
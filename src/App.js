import React, {Component}from 'react';
import './App.css';
import './reset.css';
import Nav from './components/Nav/Nav'
import FrontNav from './components/Nav/FrontNav'
import Routes from "./routes"
import {withRouter} from 'react-router-dom'
import Footer from './components/Nav/Footer';


class App extends Component{
  render(){
    return (
      <div className="App">
        {this.props.location.pathname === "/" || this.props.location.pathname === "/register" || this.props.location.pathname === "/login" ? <FrontNav /> : <Nav/>}
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

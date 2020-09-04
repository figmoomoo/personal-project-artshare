import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Post from './components/Post/Post'
import Profile from './components/Profile/Profile'
import Submit from './components/Submit/Submit'
import FrontPage from './components/Frontpage/Frontpage'

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/post/:id' component={Post} />
            <Route path='/profile/:id' component={Profile} />
            <Route path='/submit' component={Submit} />
        </Switch>
    )
}

export default Routes
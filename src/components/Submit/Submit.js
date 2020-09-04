import React, { Component } from 'react';
import axios from 'axios';

class Submit extends Component{
    constructor(){
        super()

        this.state={
            title: '',
            description: '',
            image: '',
            post_points: 0
        }
    }

    componentDidMount(){

    }

    handleChangeTitle = (value) => {
        this.setState({title: value})
    }

    handleChangeDescription = (value) => {
        this.setState({description: value})
    }

    handleChangeImage = (value) => {
        this.setState({image: value})
    }

    handleReset = () => {
        const resetForm = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            post_points: 0
        }
    }

    addPost = () => {
        
    }

    render(){
        return(
            <div>Submit</div>
        )
    }
}

export default Submit;
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
        if(this.props.match.params.id){
            
        }
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

    addPost = () => {
        const newArt = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            post_points: 0
        }

        axios.post(`/api/newPost`, newArt).then(() => {
            this.props.history.push(`/post/${this.props.match.params.id}`)
        })
    }

    render(){
        return(
            <div>
                <div className="input-section">
                    <div>Image:</div>
                    <input value={this.state.image} onChange={(e) => this.handleChangeImage(e.target.value)}/>
                    <div>Title:</div>
                    <input value={this.state.title} onChange={(e) => this.handleChangeTitle(e.target.value)}/>
                    <div>Description:</div>
                    <input value={this.state.description} onChange={(e) => this.handleChangeDescription(e.target.value)}/>
                </div>
                <div className="form-buttons">
                    <button onClick={this.addPost}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default Submit;
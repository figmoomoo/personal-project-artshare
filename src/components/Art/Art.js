import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios'

class Art extends Component {
    constructor(){
        super()
        this.state = {
            specificArt: []
        }
    }

    componentDidMount(){
        this.getSpecificArt();
    }

    async getSpecificArt() {
        const response = await axios.get(`/api/post/${this.props.match.params.id}`)
        this.setState({specificArt: response.data})
    }
    
    render(){
        const specificMappedArt = this.state.specificArt.map((e) => {
            return (
                <div>
                    {console.log(e)}
                    <img src={e.image} style={{height: 800}}/>
                    <h3>{e.title}</h3>
                    <h3>by: {e.username}</h3>
                    <h3>{e.description}</h3>
                </div>
            )
        })
        return(
            <div>
                {specificMappedArt}
            </div>
        )
    }
}

export default withRouter(Art)
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
                    <img src={e.image}/>
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
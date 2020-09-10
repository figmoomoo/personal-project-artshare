import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Delete from "./Delete";
import axios from "axios";

class Art extends Component {
  constructor() {
    super();
    this.state = {
      specificArt: [],
      title: '',
      description: '',
      toggle: false,
    };
  }

  componentDidMount() {
    this.getSpecificArt();
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

// this is for the Edit function 
  handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value})
  }

  deleteArt = (id) => {
    axios
      .delete(`/api/deletePost/${id}`)
      .then(() => this.props.history.push("/dashboard"));
  }

  saveArtInfo = async () => {
    let newPost = axios.put(`/api/edit/${this.props.match.params.id}`, {
      title: this.state.title,
      description: this.state.description,
    });
    // console.log(newPost.data);
    // this.setState();
    this.getSpecificArt();
    this.handleToggle();
  };

  async getSpecificArt() {
    const response = await axios.get(`/api/post/${this.props.match.params.id}`);
    console.log(response.data)
    this.setState({ specificArt: response.data });
  }

  render() {
    console.log(this.state.specificArt);
    const specificMappedArt = this.state.specificArt.map((e) => {
      return (
        <div>
          {console.log(e)}
          {!this.state.toggle ? (
            <div>
              <img src={e.image} style={{ height: 800 }} />
              <div>
                <h3>{e.title}</h3>
                <h3>by: {e.username}</h3>
              </div>
              <div>
                <h3>{e.post_points}</h3>
                <button>Like</button>
              </div>
              <h3>{e.description}</h3>
              <div>
                <button onClick={() => this.handleToggle()}>Edit</button>
                <Delete id={e.post_id} userId={e.user_id} />
              </div>
            </div>
          ) : (
            <div>
                {/* this is for the Edit function */}
              <img src={e.image} style={{ height: 800 }} />
              <input value={this.state.title} onChange={this.handleChange} name="title"/>
              <h3>by: {e.username}</h3>
              <h3>{e.post_points}</h3>
              <input value={this.state.description} onChange={this.handleChange} name="description"/>
              <button onClick={this.saveArtInfo}>Save</button>
            </div>
          )}
        </div>
      );
    });
    return <div>{specificMappedArt}</div>;
  }
}

export default withRouter(Art);

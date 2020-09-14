import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Delete from "./Delete";
import axios from "axios";

class Art extends Component {
  constructor() {
    super();
    this.state = {
      specificArt: [],
      title: "",
      description: "",
      toggle: false,
      showMenu: false,
    };
  }

  componentDidMount() {
    this.getSpecificArt();
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  // this is for the Edit function
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteArt = (id) => {
    axios
      .delete(`/api/deletePost/${id}`)
      .then(() => this.props.history.push("/dashboard"));
  };

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
    console.log(response.data);
    this.setState({ specificArt: response.data });
  }

  render() {
    console.log(this.state.specificArt);
    const specificMappedArt = this.state.specificArt.map((e) => {
      return (
        <div className="art-main">
          {console.log(e)}
          {!this.state.toggle ? (
            <div className="post-info">
              <img src={e.image} className="post-image" />
              <div className="post-header">
                <div className="post-header-left">
                  <h3 className="art-title">{e.title}</h3>
                  <h3>by: {e.username}</h3>
                </div>
                <div className="post-header-right">
                  <h3>{e.post_points}</h3>
                  <img className="like-button" src="https://cdn.discordapp.com/attachments/718455188100350035/754871212634537994/Arthaven_like_button.png"/>
                </div>
              </div>
              <div className="edit-delete-dropdown">
                <img className="edit-dropdown-button" src="https://cdn.discordapp.com/attachments/718455188100350035/754881321033138206/edit_dropdown_button.png" onClick={this.showMenu}/>
                {this.state.showMenu ? (
                  <div className="post-buttons">
                    <button onClick={() => this.handleToggle()}>Edit</button>
                    <Delete id={e.post_id} userId={e.user_id} />
                  </div>
                ) : null}
              </div>
              <h3 className="art-description">{e.description}</h3>
            </div>
          ) : (
            <div className="edit-info">
              {/* this is for the Edit function */}
              <img className="post-image" src={e.image}/>
              <div className="input-section">
                <input
                  className="submit-input-title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                  placeholder="title"
                />
                {/* <h3>by: {e.username}</h3>
                <h3>{e.post_points}</h3> */}
                <input
                  className="submit-input-description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  name="description"
                  placeholder="description"
                />
              </div>
              <button onClick={this.saveArtInfo}>Save</button>
              <button onClick={() => this.handleToggle()}>Cancel</button>
            </div>
          )}
        </div>
      );
    });
    return <div>{specificMappedArt}</div>;
  }
}

export default withRouter(Art);

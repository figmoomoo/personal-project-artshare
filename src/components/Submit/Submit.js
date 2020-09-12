import React, { Component } from "react";
import { connect } from "react-redux";
import ImageDrop from "./ImageDrop";
import axios from "axios";

class Submit extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      image: "",
      post_points: 0,
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
    }
  }

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };

  handleChangeImage = (value) => {
    this.setState({ image: value });
  };

  addPost = () => {
    const newArt = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      post_points: 0,
      author_id: this.props.user.user_id,
    };

    axios.post(`/api/newPost`, newArt).then((res) => {
      this.props.history.push(`/post/${res.data[0].post_id}`);
    });
  };

  render() {
    return (
      <div className="submit">
        <div className="submit-section">
          <div className="input-section">
            {/* <div>Image:</div>
                        <input value={this.state.image} onChange={(e) => this.handleChangeImage(e.target.value)}/> */}
            <ImageDrop handleChangeImage={this.handleChangeImage} />
            <input
              className="submit-input-title"
              value={this.state.title}
              onChange={(e) => this.handleChangeTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              className="submit-input-description"
              value={this.state.description}
              onChange={(e) => this.handleChangeDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="form-buttons">
            <button onClick={this.addPost}>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Submit);

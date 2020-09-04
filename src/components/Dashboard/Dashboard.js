import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      artBulletin: [],
    };
  }

  componentDidMount() {
    this.getAllArtPosts();
  }

  async getAllArtPosts() {
    const response = await axios.get("/api/post/");
    this.setState({ artBulletin: response.data });
  }

  render(props) {
    if (this.state.artBulletin.length === 0) {
      return <></>;
    } else {
      const mappedArt = this.state.artBulletin.map((element) => {
        return (
          <div key = {element.post_id}>
            <img
              src={element.image}
              style={{ height: 500 }}
            />
            <h3>{element.title}</h3>
            <h3>{element.description}</h3>
          </div>
        );
      });
      return (
        <div>
          {mappedArt}
        </div>
      );
    }
  }
}


export default withRouter(Dashboard);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"
import {getUser} from '../../ducks/reducer'
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
      const mappedArt = this.state.artBulletin.map((e) => {
        return (
          <div key = {e.post_id} className="dashboard-page">
            <div className="dashboard-post"> 
              <img
                src={e.image}
                className="dashboard-image"
              />
              <div className="post-header">
                <div className="post-header-left">
                  <h3 className="post-header-text">
                    <Link to ={`/post/${e.post_id}`}>
                      {e.title}
                    </Link>
                  </h3>
                  <h3 className="post-header-text">
                    by: 
                    <Link to = {`/profile/${e.user_id}`}>
                      {e.username}
                    </Link>
                  </h3>
                </div>
                <h3>{e.post_points}</h3>
              </div>
              <p1>{e.description}</p1>
            </div>
          </div>
        );
      });
      return (
        <div className="dashboard-page">
          {mappedArt}
        </div>
      );
    }
  }
}



export default withRouter(Dashboard);

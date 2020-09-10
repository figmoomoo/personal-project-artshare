import React, { Component } from "react";
import styles from '../../css/styles.css'
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
          <div key = {e.post_id}>
            <img
              src={e.image}
              style={{ height: 500 }}
            />
            <h3>
              <Link to ={`/post/${e.post_id}`}>
                {e.title}
              </Link>
            </h3>
            <h3>
              by: 
              <Link to = {`/profile/${e.user_id}`}>
                {e.username}
              </Link>
            </h3>
            <h3>{e.post_points}</h3>
            <h3>{e.description}</h3>
          </div>
        );
      });
      return (
        <div className="dashboard">
          {mappedArt}
        </div>
      );
    }
  }
}



export default withRouter(Dashboard);

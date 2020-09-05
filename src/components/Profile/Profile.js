import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"
import { getUser } from "../../ducks/reducer";
import ProfileDash from '../ProfileDash/ProfileDash'
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userArt: [],
    };
  }

  componentDidMount() {
    this.getUserArt();
  }

  async getUserArt(id) {
    const response = await axios.get(`/api/art/${this.props.match.params.id}`);
    console.log(response);
    this.setState({ userArt: response.data });
  }

  render() {
    const userMappedArt = this.state.userArt.map((e) => {
      return (
        <div key={e.post_id}>
          <img src={e.image} style={{ height: 500 }}/>
          <h3>
            <Link to={`/post/${e.post_id}`}>{e.title}</Link>
          </h3>
          <h3>{e.description}</h3>
        </div>
      );
    });
    return (
        <div>
            <ProfileDash />
            {userMappedArt}
        </div>
    )
  }
}

export default withRouter(Profile);

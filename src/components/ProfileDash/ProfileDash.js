import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'

class ProfileDash extends Component{
    constructor() {
        super()
        this.state = {
            dashInfo: []
        }
    }

    componentDidMount() {
        this.getAllDashInfo();
    }

    async getAllDashInfo() {
        const response = await axios.get(`/api/profile/${this.props.match.params.id}`)
        this.setState({dashInfo: response.data})
    }

    render(props) {
        const userMappedDash = this.state.dashInfo.map((e) => {
            return (
              <div className="profile-dash-items">
                <div>
                    <img className="profile-dash-picture"
                        src={e.profile_picture} 
                    />
                </div>
                <div className="profile-dash-info">
                    <h3 className="profile-dash-info-items">{e.username}</h3>
                    <h3 className="profile-dash-info-items">{e.art_count}</h3>
                    <h3 className="profile-dash-info-items">{e.profile_description}</h3>
                </div>

              </div>
            );
          });
          return (
              <div className="profile-dash">
                  {userMappedDash}
              </div>
          )
    }
}

export default withRouter(ProfileDash)
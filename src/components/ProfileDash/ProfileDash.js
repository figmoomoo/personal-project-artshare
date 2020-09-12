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
                    <img 
                        src={e.profile_picture} 
                        style={{height: 200}}
                    />
                </div>
                <div>
                    <h3>{e.username}</h3>
                    <h3>{e.art_count}</h3>
                    <h3>{e.profile_description}</h3>
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
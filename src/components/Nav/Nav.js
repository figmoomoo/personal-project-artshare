import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../ducks/reducer";
import axios from "axios";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    };
  }
  componentDidMount() {
    this.props.getUser();
  }

  showNav = (event) => {
    event.preventDefault();
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  logout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        this.props.logoutUser();
      })
      .catch((err) => console.log(err));
  };

  render(props) {
    return (
      <div className="NavClass">
        <Link to="/dashboard">
          <img className="logo"
            src="https://cdn.discordapp.com/attachments/718455188100350035/753545483095375942/ArtHaven_logo.png"
          />
        </Link>
        <div className="NavButtons">
          <div className="desktop-nav">
              <button>
                <Link
                  to={
                    this.props.user
                      ? `/profile/${this.props.user.user_id}`
                      : "/dashboard"
                  }
                >
                  Profile
                </Link>
              </button>
              <button>
                <Link to="/submit">Submit</Link>
              </button>
              <button onClick={this.logout}>
                <Link to="/">Logout</Link>
              </button>
            </div>
          <div className="mobile-dropdown">
            <button onClick={this.showNav}>Menu</button>
            {this.state.showNav ? (
              <div className="mobile-nav">
                <button>
                  <Link
                    to={
                      this.props.user
                        ? `/profile/${this.props.user.user_id}`
                        : "/dashboard"
                    }
                  >
                    Profile
                  </Link>
                </button>
                <button>
                  <Link to="/submit">Submit</Link>
                </button>
                <button onClick={this.logout}>
                  <Link to="/">Logout</Link>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(Nav);

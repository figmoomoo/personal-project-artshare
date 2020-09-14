import React, { Component } from "react";
import CommentEdit from './CommentEdit';

class CommentPost extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      showMasterMenu: false,
    };
  }

  showEdit() {
    this.setState({ editing: true, showMasterMenu: false });
  }

  hideEdit() {
    this.setState({ editing: false });
  }

  toggleMasterMenu() {
    this.setState({ showMasterMenu: !this.state.showMasterMenu });
  }

  hideMasterMenu() {
    if (this.state.showMasterMenu === true) {
      this.setState({ showMasterMenu: false });
    }
  }



  render() {
    const { editing, showMasterMenu } = this.state;
    const { text, date } = this.props;
    return (
      <section className="Post-parent" onClick={this.hideMasterMenu}>
        <div className="Post-master-controls">
          <img src="" onClick={this.toggleMasterMenu} />
          <div
            className="Post-master-menu"
            style={{ display: showMasterMenu ? "flex" : "none" }}
          >
            <span onClick={this.showEdit}>Edit</span>
            <span>Delete</span>
          </div>
        </div>

        <div className="Post__content">
          {
            editing ? (
              <CommentEdit text="" hideEdit={this.hideEdit} />
            ) : (
              <span className="Post__text">{text}</span>
            )
          }
        </div>
      </section>
    );
  }
}

export default CommentPost;

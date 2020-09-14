import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class CommentCreate extends Component {
  constructor() {
    super();
    
    this.state = {
      comment: '',
      comment_points: 0
    };
  }

  // componentDidMount(){
  //   if (this.props.match.params.id){

  //   }
  // }

  updateComment = (value) => {
    this.setState({comment: value});
  }

  createPost = () => {
    const newComment = {
      comment: this.state.comment,
      user_id: this.props.user.user_id,
    };

    axios.post(`/api/addComment/`, newComment).then(() => {
      
    })
  }

  render() {
    return (
      <div>
        <div>
          <input className="Create-input"
                 placeholder="Comment"
                 value={this.state.comment}
                 onChange={(e) => this.updateComment(e.target.value)}/>
        </div>

        <div>
          <button onClick={this.createPost}>Create</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CommentCreate);
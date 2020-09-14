import React, { Component } from 'react';
import axios from 'axios';
import CommentPost from './CommentPost';
import CommentCreate from './CommentCreate';

class Comment extends Component {
    constructor(){
        super();
        this.state ={
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('/api/comment/:id').then(results => {
            this.setState({posts: results.data})
        })
    }

    updatePost = ( id, comment ) => {
        axios.put(`/api/editComment/${ id }`, { comment }).then( results => {
          this.setState({ posts: results.data });
        });
    }
    
    deletePost = ( id ) => {
        axios.delete(`/api/deleteComment/${ id }`).then( results => {
          this.setState({ posts: results.data });
        });
    }
    
    createPost = ( comment ) => {
        axios.post('/api/addComment/', { comment }).then( results => {
          this.setState({ posts: results.data });
        });
    }

    // async getCommentUserInfo() {
    //     const response = await axios.get(`/api/profile/${this.props.user.user_id}`)
    //     this.setState({userInfo: response.data})
    // }

    render(){
        const {posts} = this.state;
        return(
            <div>
                <div>
                    <CommentCreate />
                    {posts.map(post => (
                        <CommentPost 
                            key={post.id}
                            id={post.id}
                            comment={post.comment}
                            updatePostFn={this.updatePost}
                            deletePostFn={this.deletePost}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Comment;
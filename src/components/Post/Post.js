import React, { Component } from 'react';
import Art from '../Art/Art'
import Comment from '../Comment/Comment'

class Post extends Component{
    render(){
        return(
            <div>
                <Art />
                {/* <Comment /> */}
            </div>
        )
    }
}

export default Post;
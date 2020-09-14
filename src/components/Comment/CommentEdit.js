import React, { Component } from 'react';

class CommentEdit extends Component {
    constructor( props ) {
      super( props );
  
      this.state = {
        comment: props.comment
      };
  
      this.updatePost = this.updatePost.bind( this );
    }
  
    updateComment( value ) {
      this.setState({ comment: value });
    }
  
    updatePost() {
      const {comment} = this.state;
      const {id, updatePostFn, hideEdit} = this.props;
      
      updatePostFn(id, comment);
      hideEdit();
    }
  
    render() {
      // More destructuring!
      const { hideEdit } = this.props;
      const { comment } = this.state;
  
      return (
        <section className="Edit-parent">
          <textarea className="Edit__textarea" value={ comment } onChange={ ( e ) => this.updateComment( e.target.value ) }></textarea>
  
          <div className="Edit-controls">

            <button id="Edit-controls-update" 
                    className="Edit-control-btn"
                    onClick={ this.updatePost }>
              Update
            </button>
  
            <button id="Edit-controls-cancel"
                    className="Edit-control-btn"
                    onClick={ hideEdit }>
              Cancel
            </button>
          </div>
  
        </section>
      )
    }
  }

export default CommentEdit;
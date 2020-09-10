import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const EditDeleteButtons = (props) => {
  const deleteArt = (id) => {
    axios
      .delete(`/api/deletePost/${id}`)
      .then(() => props.history.push("/dashboard"));
  };

  return (
    <div>
      {props.user.user_id === props.userId ? (
        <div>
          <button onClick={() => deleteArt(props.id)}>Delete</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => state;

export default withRouter(connect(mapStateToProps)(EditDeleteButtons));

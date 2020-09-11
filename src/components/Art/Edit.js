// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import axios from "axios";

// class Edit extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       description: "",
//       image: 
//     };
//   }

//   componentDidMount() {
//     if (this.props.match.params.id) {
//     }
//   }

//   handleChangeTitle = (value) => {
//     this.setState({ title: value });
//   };
//   handleChangeDescription = (value) => {
//     this.setState({ description: value });
//   };

//   saveArtInfo = async () => {
//     let newPost = axios.put(`/api/edit/${this.props.post_id}`, {
//       title: this.state.title,
//       description: this.state.description,
//     });
//     console.log(newPost.data);
//     this.setState();
//   };

//   render() {
//     return (
//       <div>
//         <img
//           className="image-preview"
//           src={this.state.image}
//           alt={this.state.name}
//           style={{ height: 200 }}
//         />
//         <div>
//           <div>Title:</div>
//           <input
//             value={this.state.title}
//             onChange={(e) => this.handleChangeTitle(e.target.value)}
//           />
//           <div>Description:</div>
//           <input
//             value={this.state.description}
//             onChange={(e) => this.handleChangeDescription(e.target.value)}
//             style={{ height: 400 }}
//           />
//         </div>
//         <div>
//           <button onClick={this.saveArtInfo}>Save</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(Edit);

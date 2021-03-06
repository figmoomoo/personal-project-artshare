import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { v4 as randomString } from "uuid";
import { GridLoader } from "react-spinners";
import axios from "axios";

class ImageDrop extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/450x450',
    };
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });

    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

    axios
      .get('/api/signs3', {
        params: {
          'file-name': fileName,
          'file-type': file.type,
        },
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        this.setState({ isUploading: false, url });
        this.props.handleChangeImage(this.state.url)
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
      })
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        console.log(err)
      });
  };

  render() {
    const { url, isUploading } = this.state;
    return (
      <div className="Image-Drop">
        {/* <h1>Upload</h1>
        <h1>{url}</h1> */}
        <img className="Image-Drop-image"src={url} alt=""/>

        <Dropzone
          className="Dropzone"
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}
        >
          {isUploading ? <GridLoader /> : <p className="drop-text">Drop File or Click Here</p>}
        </Dropzone>
      </div>
    );
  }
}

export default ImageDrop;

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
        url: 'http://via.placeholder.com/450x450'
    }
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });

    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

    axios
      .get("/sign-s3", {
        params: {
          "file-name": fileName,
          "file-type": file.type,
        },
      })
      .then((response) => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type,
      },
    };

    axios.put(signedRequest, file, options).then((response) => {
      this.setState({ isUploading: false, url });
      // .post("/api/img", {url})
    });
  };

  render() {
    const { url, isUploading } = this.state;
    return (
      <Dropzone
        onDropAccepted={this.getSignedRequest}
        accept="image/*"
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              position: "relative",
              width: 160,
              height: 80,
              borderWidth: 5,
              marginTop: 25,
              borderColor: "gray",
              borderStyle: "dashed",
              borderRadius: 5,
              display: "inline-block",
              fontSize: 17,
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isUploading ? (
              <GridLoader />
            ) : (
              <p>Drop files here, or click to select files</p>
            )}
          </div>
        )}
      </Dropzone>
    );
  }
}

export default ImageDrop;

import React, { Component } from 'react';
import './App.css';

import { FilePond, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class App extends Component {
  state = {
    submissionStatus: "Pending"
  }

  submitted = () => {
    this.setState({
      submissionStatus: "Submitted"
    }
    )
  }

  render() {
    const {submissionStatus} = this.state;

    return (
      <div className="App">
        <div className="Card">
        <h2> Assignment Submission </h2>
        <h3> Status: {this.state.submissionStatus} </h3>
          <FilePond
            allowMultiple = {true}
            allowDrop = {true}
            allowBrowse = {true}
            maxFiles = {5}
            allowPaste = {true}
            dropOnPage = {true}
            dropValidation = {true}
            styleProgressIndicatorPosition = "bottom"
            onaddfile = {this.submitted}
       />

        </div>
      </div>
    )
  }
}

export default App;

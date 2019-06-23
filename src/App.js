import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { createElement } from '@syncfusion/ej2-base';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            uploadObj: UploaderComponent,
            submitStatus: "Pending",
            paths:{
                removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
                saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
            }
        };
    }
    dropAreaRef: HTMLElement;
    onCreated() {
            this.uploadObj.dropArea = this.dropAreaRef;
            this.uploadObj.dataBind();
    };

    uploadObj: UploaderComponent;
    uploadEle: HTMLElement = createElement(
      'span', {
         className: 'upload e-icons', innerHTML : 'Upload All'
       });

    clearEle: HTMLElement = createElement(
      'span', {
      className: 'remove e-icons', innerHTML : 'Clear All'
    });

    onSubmission () {
      this.setState(
        this.submitStatus = "Submitted"
      )
    }
  render(){

  return (
    <div className="App">
      <h2> Document Upload </h2>
      {/* <h3> Submission Status: {this.state.submitStatus} </h3> */}

      <div className='control-section row uploadpreview'>
                <div className='col-lg-9'>
                <div className='upload_wrapper'>
                <div id='preview'/>
      <UploaderComponent id = "uploader"
        asyncSettings = {this.state.paths}
        allowedExtensions = ".doc, .docx, .jpg"
        multiple = {true}
        buttons={ { browse: 'Choose file', clear: this.clearEle, upload: this.uploadEle }}
        />
        </div>
        </div>
        </div>
    </div>
    
  );
}
}
export default App;

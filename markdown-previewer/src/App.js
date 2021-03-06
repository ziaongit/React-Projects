import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

var marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {markdown: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container-fluid">
        <h1 className="heading">Markdown Previewer</h1>
        <div className="col-md-6">
          <FormGroup controlId="formControlsTextarea">
            <FormControl
                componentClass="textarea"
                placeholder="Enter Markdown"
                className="markdownEntry"
                defaultValue={this.state.value}
                onChange={this.handleChange}>
          </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-6">
          <div className="markdownOutput" dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
        </div>
      </div>
    );
  }
}

export default App;

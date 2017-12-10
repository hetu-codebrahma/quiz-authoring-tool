import React, { Component } from 'react';
import autosize from 'autosize';
import './styles.css';

class TextInput extends Component {
  componentDidMount(){
    autosize(this.textarea)
  }

  render() {
    return (
      <div className="TextInput">
        <span className="TextInputLabel">
          {this.props.label}
        </span>
        <textarea
          ref={component => this.textarea = component}
          onChange={(e) => this.props.onChange(e.target.value)}
          className="TextInputField"
          value={this.props.value}
        />
      </div>
    )
  }
}


export default TextInput;
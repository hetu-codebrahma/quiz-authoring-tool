import React, { Component } from 'react';
import Button from '../Button/';
import './styles.css';

class ImageInput extends Component {

  constructor(props){
    super(props);

    // Ref of input
    this.input = null;
  }

  handleInputChange(){
    const reader = new FileReader();
    const file = this.input.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.props.onImageSelected(reader.result);
    }
  }

  removeImage(){
    this.props.onImageSelected(null);
  }

  render(){
    return (
      <div className="ImageInput">
        {this.props.value  && (
          <img
            src={this.props.value}
            className="image"
            alt=""
          />
        )}
        <input
          ref={elem => {this.input = elem}}
          type="file"
          multiple="false"
          onChange={() => this.handleInputChange()}
          style={{ display: 'none' }}
          accept="image/*"
        />
        {
          this.props.value ? (
            <Button
              onClick={() => this.removeImage()}
              label="Remove Image"
              backgroundColor="crimson"
              labelColor="white"
            />
          ) : (
            <Button
              onClick={() => this.input.click()}
              label="Add Image"
              backgroundColor="#CDDC39"
              labelColor="#333"
            />
          )
        }

      </div>
    )
  }
}

export default ImageInput;

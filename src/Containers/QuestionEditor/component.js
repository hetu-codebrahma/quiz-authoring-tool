import React, { Component } from 'react';
import uuid from 'uuid/v1';
import TextInput from '../../Components/TextInput';
import ImageInput from '../../Components/ImageInput';
import Button from '../../Components/Button';
import './styles.css';

class QuestionEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deleteMode: false,
    }
  }

  handleQuestionValueChange(value){
    const { id } = this.props.question;
    this.props.updateQuestionValue(value, id);
  }

  handleImageSelected(imageDetails) {
    const { id } = this.props.question;
    this.props.updateQuestionImage(id, imageDetails);
  }

  handleOptionValueChange(value, optionID){
    this.props.updateOptionValue(value, optionID);
  }

  addNewOption() {
    const { options, question } = this.props;
    // Dont allow more than 6 options
    if(options.length > 5) {
      // Can also show a error banner
      return
    }
    this.props.addOption(question.id, uuid());
  }

  deleteOption(optionID) {
    const { options } = this.props;
    // Dont allow less than 2 options
    if(options.length < 3) {
      return
    }
    this.props.deleteOption(optionID);
  }

  activateDeleteMode() {
    this.setState({
      deleteMode: true,
    })
  }

  deactivateDeleteMode() {
    this.setState({
      deleteMode: false,
    })
  }

  render() {
    return (
      <div className="QuestionEditor">
        <h3 className="heading">Edit Question</h3>
        {
          this.props.question ? (
            <div>
              <TextInput
                label="Question"
                value={this.props.question.value}
                onChange={(value) => this.handleQuestionValueChange(value)}
              />
              <ImageInput
                onImageSelected={imageDetails => this.handleImageSelected(imageDetails)}
                value={this.props.question.image}
              />
              <div className="divider"/>
              {
                this.props.options.map((option, i) => {
                  return(
                    <div key={option.id} className="OptionContainer" >
                      <TextInput
                        label={`Option ${i + 1}.`}
                        value={option.value}
                        onChange={(value) => this.handleOptionValueChange(value, option.id)}
                      />
                      {
                        this.state.deleteMode && (
                          <Button
                            onClick={() => this.deleteOption(option.id)}
                            label="X"
                            labelColor="white"
                            backgroundColor="#e74c3c"
                          />
                        )
                      }
                    </div>
                  )
                })
              }
              {
                this.state.deleteMode ? (
                  <div className="ButtonsContainer">
                    <Button
                      onClick={() => this.deactivateDeleteMode()}
                      label="Done"
                    />
                  </div>
                ) : (
                  <div className="ButtonsContainer">
                    <Button
                      onClick={() => this.addNewOption()}
                      label="Add"
                      backgroundColor="#CDDC39"
                      labelColor="#333"
                    />
                    <Button
                      onClick={() => this.activateDeleteMode()}
                      label="Delete"
                      backgroundColor="crimson"
                      labelColor="white"
                    />
                  </div>
                )
              }
            </div>
          ) : (
            <div>
              <h4 className="heading">Please add/select a question</h4>
            </div>
          )
        }
      </div>
    )
  }
}

export default QuestionEditor;

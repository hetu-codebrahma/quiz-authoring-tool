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

  handleOptionValueChange(value, optionIndex){
    const { id } = this.props.question;
    this.props.updateOptionValue(value, optionIndex, id);
  }

  addNewOption() {
    const { id, options } = this.props.question;
    // Dont allow more than 6 options
    if(options.length > 5) {
      // Can also show a error banner
      return
    }
    this.props.addNewOptionToQuestion(id);
  }

  deleteOption(optionIndex) {
    const { id, options } = this.props.question;
    // Dont allow less than 2 options
    if(options.length < 3) {
      return
    }
    this.props.deleteOptionOfQuestion(optionIndex, id);
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
        <h3>Edit Question</h3>
        {
          this.props.question ? (
            <div>
              <TextInput
                label="Question"
                value={this.props.question.title}
                onChange={(value) => this.handleQuestionValueChange(value)}
              />
              <ImageInput
                onImageSelected={imageDetails => this.handleImageSelected(imageDetails)}
                value={this.props.question.image}
              />
              <div className="divider"/>
              {
                this.props.question.options.map((option, i) => {
                  return(
                    <div key={uuid()} className="OptionContainer" >
                      <TextInput
                        label={`Option ${i + 1}.`}
                        value={option}
                        onChange={(value) => this.handleOptionValueChange(value, i)}
                      />
                      {
                        this.state.deleteMode && (
                          <Button
                            onClick={() => this.deleteOption(i)}
                            label="X"
                            style={{ backgroundColor: 'rgb(223, 223, 223)' }}
                            labelStyle={{ color: 'red' }}
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
                    />
                    <Button
                      onClick={() => this.activateDeleteMode()}
                      label="Delete"
                      style={{ backgroundColor: 'crimson' }}
                    />
                  </div>
                )
              }
            </div>
          ) : (
            <div>
              <p>Please add/select a question</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default QuestionEditor;

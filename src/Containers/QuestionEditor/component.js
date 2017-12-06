import React, { Component } from 'react';
import TextInput from '../../Components/TextInput';
import './styles.css';

class QuestionEditor extends Component {

  handleQuestionValueChange(value){
    const { id } = this.props.question;
    this.props.updateQuestionValue(value, id);
  }

  handleOptionValueChange(value, optionIndex){
    const { id } = this.props.question;
    this.props.updateOptionValue(value, optionIndex, id);
  }

  render(){
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
              {
                this.props.question.options.map((option, i) => {
                  return(
                    <div>
                      <TextInput
                        label={`Option ${i + 1}.`}
                        value={option}
                        onChange={(value) => this.handleOptionValueChange(value, i)}
                      />
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <div>
              <p>Please add/select a question</p>
            </div>
          )
        }
      </div>
    );
  }
};

export default QuestionEditor;

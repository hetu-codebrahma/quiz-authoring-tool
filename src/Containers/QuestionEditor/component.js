import React, { Component } from 'react';
import TextInput from '../../Components/TextInput';
import './styles.css';

class QuestionEditor extends Component {

  handleQuestionValueChange(value){
    const { id } = this.props.question;
    this.props.updateQuestionValue(value, id);
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
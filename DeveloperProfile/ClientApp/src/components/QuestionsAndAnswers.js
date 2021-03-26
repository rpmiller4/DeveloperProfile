import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';

export class QuestionsAndAnswers extends Component {
  static displayName = QuestionsAndAnswers.name;

  constructor(props) {
    super(props);
    this.state = { context: "", question: "", answer: "" };

    this.respond = this.respond.bind(this);
    this.setContext = this.setContext.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
  }

  setContext(event) {
    this.setState({
      question: event.target.value
    });
  }

  setQuestion(event) {
    this.setState({
      context: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Q And A (ML)</h1>

        <p>This is a simple example of a the QNA Tensorflow component.</p>

        <div class="form-group">
          <label for="questionContext">Insert Context Here</label>
          <textarea class="form-control" id="questionContext" rows="3" onChange={this.setContext}>Enter context here</textarea>
          <label for="answerTextArea">Answer:</label>
          <textarea class="form-control" id="questionArea" rows="3" onChange={this.setQuestion}></textarea>
        </div>
        <button className="btn btn-primary" onClick={() => this.submitQuestion()}>Get Answers</button>


        <p>{this.state.answer}</p>
      </div>
    );
  }

  async submitQuestion() {
    await this.respond(this.state.question, this.state.context)
  }

  async respond(question, passage) {
    console.log(question);
    console.log(passage);
    console.log(qna.version);
    // Load the model.
    await qna.load().then(model => {
      // Find the answers
      model.findAnswers(passage, question).then(answers => {
        this.setState({
          answer: JSON.stringify(answers)
        });
      });
    });
  }

}
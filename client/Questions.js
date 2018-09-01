import React, {Component, Fragment} from 'react'
import questions from '../data/questions.json'
import {CreatedSelect, CreatedRadio} from './createForm.js'
import axios from 'axios'


export default class Questions extends Component {
  state = {
    questions : [],
    answers: [],
    currentQuestion: 1
  }
  
  answerQuestion = (answer) => {
    this.setState({answer:[...this.state.answers, answer], currentQuestion: this.state.currentQuestion+1})
    console.log(this.state, 'sam')
  }

  componentDidMount() {
    axios.get('/api/questions')
    .then(questions => {
      this.setState({
        questions : questions.data
      })
    })
  }

  render () {

    return (
      <div>
        {this.state.questions.map((question, idx) => {
          return (
            <Fragment>
            <CreatedSelect question={question} key={question.id} answer={this.answerQuestion}/>
            <CreatedRadio question={question} key={idx} type='radio' answer={this.answerQuestion}/>
            </Fragment>
          )
        } )}
        
      </div>
    )
  }
}



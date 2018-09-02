import React, {Component, Fragment} from 'react'
import questions from '../data/questions.json'
import {CreatedSelect, CreatedRadio} from './createForm'
import Result from './Result'
import sortHouse from './sortHouse'
import axios from 'axios'


export default class Questions extends Component {
  state = {
    questions : [],
    answers: [],
    currentQuestion: 1
  }

  answerQuestion = (house) => {
    this.setState({answers:[...this.state.answers, house], 
      currentQuestion:this.state.currentQuestion+1})
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
    const {currentQuestion} = this.state;
    // const currentComp = currentQuestion === question.id && currentQuestion%2 === 0 ? 
    // <CreatedSelect question={question} key={question.id} /> :
    // <CreatedRadio question={question} key={question.id} type='radio' />
    return (
      <div>
        {this.state.questions.map((question, idx) => {
          return (
            <div>
            {(currentQuestion === question.id && question.id%2===0) && 
              <CreatedRadio question={question} key={question.id} type='radio' answer={this.answerQuestion}/>}
              {(currentQuestion === question.id && question.id%2===1) && 
                <CreatedSelect question={question} key={question.id} answer={this.answerQuestion}/>}
            </div>
            )
        })}
        <div>
        {currentQuestion > this.state.questions.length &&
          <Result house={sortHouse} answers={this.state.answers}/>
        }
        </div>
      </div>
    )
  }
}



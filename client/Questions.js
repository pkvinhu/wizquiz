import React, {Component} from 'react'
import questions from '../data/questions.json'
import SelectForm from './SelectForm.js'
import axios from 'axios'

export default class Questions extends Component {
  state = {
    questions : []
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
        {console.log(this.state.questions)}
        {this.state.questions.map((question) => {
          return <SelectForm question={question} key={question.id}/>
        } )}
        
      </div>
    )
  }
}

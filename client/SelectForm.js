import React, {Component} from 'react'

export default class SelectForm extends Component {
  state = {
    answer : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    }, () => console.log(this.state))
  }

  render() {
    const {question} = this.props;

    return (
      <form onChange={this.handleChange} onSubmit={e => e.preventDefault()}>
        <label>{question.name}</label>
        <select name='answer'>
          <option value=''>--</option>
          {question.choices.map(choice => {
            return <option key={choice.id} value={choice.value}>{choice.label}</option>
          })}

        </select>
        <button type='submit'>Next</button>
      </form>
    )
  }

}


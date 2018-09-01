import React, {Component} from 'react'


const createForm = (FormComponent) => {
  return class StatefulForm extends Component {
    state = {
    answer : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	this.props.answer(e.target.value)
  }

  	render(){
  	  return <FormComponent {...this.props} {...this.state} handleChange={this.handleChange} />
  	}
  }
}

const RadioForm = ({question, key, type, handleChange, handleSubmit}) => {
	return (
  	  <form onChange={handleChange} onSubmit={handleSubmit}>
  	    <label>{question.name}</label>
  	    {question.choices.map(choice=>{
  	    	return (
  	    	  <label>
  	            <input type={type} name='answer' value={choice.value} />
  	            {choice.label}
  	          </label>
  	    	)
  	    })}
  	    <button type='submit'>Next</button>
  	  </form>
  	)
}

const SelectForm = ({question, key, handleChange, handleSubmit}) => {
	return (
	  <form onChange={handleChange} onSubmit={handleSubmit}>
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

const CreatedSelect = createForm(SelectForm)
const CreatedRadio = createForm(RadioForm)

export {CreatedRadio, CreatedSelect}
// import React, {Component} from 'React'

// export default class RadioForm extends Component {
  
//   // state = {
//   // 	answer: ''
//   // }

//   // handleChange = (e) => {
//   //   this.setState({
//   //     [e.target.name] : e.target.value
//   //   }).then(()=>console.log(this.state))
//   // }

//   render(){
//   	const {choices} = this.props.question;
//   	return (
//   	  <div>
//   	  <form onChange={this.handleChange}>
//   	    <label>{this.props.question.name}</label>
//   	    {choices.map(choice=>{
//   	    	return (
//   	    	  <label>
//   	            <input type={this.props.type} name='answer' value={choice.value} />
//   	            {choice.label}
//   	          </label>
//   	    	)
//   	    })}
//   	    <button type='submit'>Next</button>
//   	  </form>
//   	  </div>
//   	)
//   }
// }
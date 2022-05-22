import React, { Component } from "react";
import {connect} from "react-redux";
import {handleSaveQuestionVote} from '../actions/shared'
import { FormControl, FormLabel, RadioGroup , FormControlLabel, Radio, Button} from '@material-ui/core';


class AnswerQuestionView extends Component{ 
  
   state = {
        answeredOption: this.props.answeredOption  
    } 
  
   handleRadioChange = (event) => {      
      const  answeredOption  = event.target.value
       this.setState(() => ({
            answeredOption
        }))
     console.log( "new state",answeredOption)  
   } 
  
   submitPoll = (event)=>{
    event.preventDefault()
    const {question, authedUser, dispatch} = this.props
    const answer = this.state.answeredOption === question.optionOne.text ? "optionOne" : "optionTwo"
    dispatch(handleSaveQuestionVote({
                authedUser:authedUser.user.id, 
     			qid:question.id, 
      		    answer:answer
               }))
    }
  
   render(){
      const {question, avatar, authorName} = this.props
      const { answeredOption } = this.state
       console.log( "after render ",answeredOption )
      return (
        <div className="questionView">
        <img
          src={avatar}
          alt=''
          className='avatar'/>
  		<h2>{authorName}</h2> 	 
       <FormControl component="fieldset">
            <FormLabel component="legend">Would you rather ?</FormLabel>
            <RadioGroup aria-label="wur" name="wur" value={answeredOption} onChange={this.handleRadioChange}>
              <FormControlLabel value={question.optionOne.text} control={<Radio />} label={question.optionOne.text} />
              <FormControlLabel value={question.optionTwo.text} control={<Radio />} label={question.optionTwo.text} />
            </RadioGroup>
		<Button onClick={this.submitPoll}>Submit</Button> 
       </FormControl>
        </div>
      )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}){
  const question = questions[id]     
  const answeredOption = question.optionOne.text
  const avatar = users[question.author].avatarURL
  const authorName = users[question.author].name
  return {      
       	question, 
      	avatar,
        answeredOption,
        authedUser,
    	authorName
    }
}

export default connect(mapStateToProps)(AnswerQuestionView)
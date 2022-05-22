import React, { Component } from "react";
import {connect} from "react-redux";
import AnswerQuestionView from './AnswerQuestionView'

class QuestionDetailsView extends Component{ 
  render(){
    const {question, avatar, authorName, answeredOption,answeredOptionObj,  id} = this.props
    if (typeof question === 'undefined')
            return <p>Sorry, but that poll wan't found</p>
    const questionDetailsComponent = answeredOption === 0 
    	? <AnswerQuestionView id={id}/> 
    	:<Details question={question} avatar={avatar} authorName={authorName} answeredOptionObj={answeredOptionObj}/>;
    return(questionDetailsComponent)     
  }
}

function getTotalVotes(question){     
    const total =   question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOnePercent = !question.optionOne.votes.length ? 0 : question.optionOne.votes.length / total
    const optionTwoPercent = !question.optionTwo.votes.length ? 0 : question.optionTwo.votes.length / total
	const stats = {
      total:total,
      optionOneVotes :question.optionOne.votes.length,
      optionTwoVotes :question.optionTwo.votes.length,
      optionOnePercent : (optionOnePercent * 100.0 ),
      optionTwoPercent: (optionTwoPercent * 100.0),
    }
    
    return stats
  }

function Details(props){
  const {question, avatar, authorName, answeredOptionObj} = props  
  const stats = getTotalVotes(question)
  return (
    <div  className="questionView">
	  <span>Asked by: </span>      
      <span>{authorName}</span>
	  <img
          src={avatar}
          alt=''
          className='avatar'/>
      <p>Results : </p>
      <p>{`Answered by user: ${question[answeredOptionObj].text}`}</p>
	  <span>Total votes:</span>
      <span>{stats.total}</span> 
      <p>{question.optionOne.text}</p>
 	  <p>{stats.optionOneVotes}</p>
 	  <p>{stats.optionOnePercent}</p><span>%</span>
      <p>{question.optionTwo.text}</p>
 	  <p>{stats.optionTwoVotes}</p> 
      <p>{stats.optionTwoPercent}</p><span>%</span>
      </div>
  )
}

function mapStateToProps({authedUser, questions, users}, props){
  const {id} = props.match.params
  const question = questions[id]
  if( typeof question === 'undefined')
       return {}
  const answeredOptionOne = (question.optionOne.votes.length  > 0 && question.optionOne.votes.includes(authedUser.user.id)) 
  const answeredOptionTwo = (question.optionTwo.votes.length > 0 && question.optionTwo.votes.includes(authedUser.user.id)) 
  const answeredOption = answeredOptionOne ? 1: (answeredOptionTwo ? 2 :0)
  const answeredOptionObj = answeredOptionOne ? "optionOne": (answeredOptionTwo ? "optionTwo" :"")  
  const avatar = users[question.author].avatarURL
  const authorName = users[question.author].name
  return {      
  		id,
       	question, 
      	avatar,
        answeredOption,
        answeredOptionObj,
    	authorName
    }
}

export default connect(mapStateToProps)(QuestionDetailsView)
import React, { Component } from "react";
import {connect} from "react-redux";
import { Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom'

class Question extends Component {
     viewPoll = (e, id) => {
        e.preventDefault()
       console.log(id)
       console.log(this.props.history)      
       
      this.props.history.push(`/question/${id}`)
    }
  
  render(){
    const {question,  display, avatar, authorName, id} = this.props
    if (question === null)
            return <p>Sorry, but that poll wan't found</p>
    
    return(display &&
      <div className = 'question'>
      <img
          src={avatar}
          alt=''
          className='avatar'/>
  <div>
  			<p className="thick">{`${authorName} asks:`}</p>
      		<p>{`Would you rather ${question.optionOne.text} or ...`}</p>    
           
            	<Button  onClick={(e) => this.viewPoll(e,
                                    id)} variant="contained" size="small">
                                    View Poll
                                </Button>
                                </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, displayUnanswered }) {  
    const question = questions[id]  
	const answered = (question.optionOne.votes.length  > 0 && question.optionOne.votes.includes(authedUser.user.id)) ||  
          (question.optionTwo.votes.length > 0 && question.optionTwo.votes.includes(authedUser.user.id))  
    const display = displayUnanswered ? 
          (answered === false) : (answered ===true)
    
    const avatar = users[question.author].avatarURL
    const authorName = users[question.author].name
    return {
    	id,
        display,
        question,
        avatar,
        authorName       
    }
}

export default withRouter(connect(mapStateToProps)(Question))
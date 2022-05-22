import React, { Component } from "react";
import {connect} from "react-redux";
import { Divider} from '@material-ui/core';

class Leaderboard extends Component{
  
  render(){
    const {users} = this.props
    return(
      <div className="container tab">
      { users.map((user)=>(
      	<div key={user.name} className="question margin">         
          <img
            src={user.avatar}
            alt=''
            className='avatar'/>
   		   <p className="thick third">{user.name}</p>  
          <div>	
            	<p>{`Asked questions: ${user.askedQuestions}`}</p> 
                  <Divider />
                  <p>{`Answered questions: ${user.userAnswers}`}</p>  
                    <Divider />
                   <p className="thick">{`Total: ${user.score}`}</p>   
          </div>             
          </div>
    	))}
      </div>
    )
  }
}


function getUserDetails(user){
  var userAnswers = Object.keys(user.answers).length 
  var askedQuestions =  user.questions.length;
  return {
    name: user.name,
    avatar: user.avatarURL,
    userAnswers,
    askedQuestions,
    score: userAnswers + askedQuestions
  }
}

function mapStateToProps ({users}) {
 const usersArray = Object.keys(users).map((user)=> getUserDetails(users[user]));
  return {
     users : usersArray.sort((a,b) =>b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard)
import React, { Component } from "react";
import {connect} from "react-redux";

class Leaderboard extends Component{
  
  render(){
    const {users} = this.props
    return(
      <div>
      { users.map((user)=>(
      	<div key={user.name}>
          <p>{user.name}</p>  
          <img
            src={user.avatar}
            alt=''
            className='avatar'/>
           <p>{`Asked question: ${user.askedQuestions}`}</p> 
           <p>{`Answered questions: ${user.userAnswers}`}</p>  
           <p>{`Total: ${user.score}`}</p>     
          </div>
    	))}
      </div>
    )
  }
}


function getUserDetails(user){
  var userAnswers = Object.keys(user.answers).length 
  {/*todo fix count*/}
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
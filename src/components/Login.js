import React, { Component } from "react";
import {connect} from "react-redux";
import {setAuthedUser} from '../actions/authedUser'
import { Select, MenuItem  } from '@material-ui/core';


class Login extends Component {
 handleChange=(event)=> {  
   const userName = event.target.value
   const user = this.props.users[userName]
   this.props.dispatch(setAuthedUser({user}))
 }
    
  render(){
    const { userNames} = this.props   
    const options = userNames.map((name) => (<MenuItem  key={name} value={name} >{name}</MenuItem >))

    return (
      <div>
      <h3>Login</h3>
      <Select 
      	onChange={this.handleChange}
		defaultValue="DEFAULT">      
  			<MenuItem  value="DEFAULT" >Select a user ...</MenuItem >
			{options}
      </Select>  
      </div>
    )
  }
}

function  mapStateToProps({users, authedUser}) {
   console.log(users)
    return{
      userNames : Object.keys(users)
            .sort((a,b)=> users[b].name - users[a].name),
      users
    }
}

export default connect(mapStateToProps)(Login)
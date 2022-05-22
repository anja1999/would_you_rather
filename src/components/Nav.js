import React, { Component } from "react";
import {connect} from "react-redux";
import {removeAuthedUser} from '../actions/authedUser'
import { NavLink } from 'react-router-dom'
import { Button} from '@material-ui/core';


class Nav extends Component {
  handleLogOut =(e)=>{
    e.preventDefault()
    const {dispatch }  = this.props
    dispatch(removeAuthedUser())
  }
  
  render(){
    const {authedUser} = this.props
    const display = authedUser !== null   
    
    return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
    <li  >{ display &&
       <div>     			
            	<img
                  src={authedUser.user.avatarURL}
                  alt=''
                  className='avatar avatarLogo'/>
  				<span className="thick"> Welcome, {authedUser.user.name}</span>
          		<Button 
					onClick={this.handleLogOut} 
					variant="outlined" 
					size="small">Logout</Button>
        </div>
      }
   
    </li>
      </ul>

    </nav>
  )
  }

} 

function  mapStateToProps({authedUser}) {
  if(authedUser === null) 
      return{
      authedUser:null
    }
    return{
      authedUser 
    }
}
export default connect(mapStateToProps)(Nav)
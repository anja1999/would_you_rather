import React, { Component } from "react";
import {connect} from "react-redux";
import { Button, TextareaAutosize} from '@material-ui/core';
import {handleSaveQuestion} from "../actions/shared"
import {Redirect} from 'react-router-dom'


class NewQuestion extends Component {
  state={
    optionOneText :"",
    optionTwoText: "",
    toHome: false
  }
  
  handleOptionOneChange=(e)=>{
    const optionOneText = e.target.value
    this.setState(()=>({optionOneText}))
  }
  
   handleOptionTwoChange=(e)=>{
    const optionTwoText = e.target.value
    this.setState(()=>({optionTwoText}))
  }
  
  handleSubmit=(e)=> {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state;
    const { dispatch} = this.props      
    dispatch(handleSaveQuestion({optionOneText, optionTwoText}))
    this.setState(()=>({
        optionOneText :"",
    	optionTwoText: "",
        toHome : true
    }))   
   
  }
  
  render(){
    const {optionOneText, optionTwoText, toHome} = this.state
     if(toHome === true){
            return <Redirect to='/'/>
        }
    return (
      <div className="container">
      <h1>Create new question</h1>
      <p> Complete question : </p>
      <h2>Would you rather ...</h2>
      <form onSubmit = {this.handleSubmit}>
		<TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter question one text here "
          value={optionOneText}
          style={{ width: 400 }}
		  onChange={this.handleOptionOneChange}
        />
		<p>OR</p>
		<TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter question two text here "
          value={optionTwoText}
          style={{ width: 400 }}
		  onChange={this.handleOptionTwoChange}
		/>
      <Button type="submit" disabled={optionOneText === "" || optionTwoText === ""}>Submit</Button>
      </form>      
      </div>
    )
  }
}

export default connect()(NewQuestion)
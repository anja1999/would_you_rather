import React, { Component } from "react";
import {connect} from "react-redux";
import Question from './Question'
import { Tabs, Tab, AppBar } from '@material-ui/core';

class QuestionList extends Component {
  
   state = {
        value: 0      
    }
  
   handleTabChange = (e, value) => {       
       this.setState(() => ({
            value
        }))
   } 
   
  render(){
    const { value } = this.state
    return(
      <div className="container">  
  		  <AppBar position="static">
  			<Tabs value={value} onChange={this.handleTabChange}>
  				<Tab label="Unanswered questions"/>
  				<Tab label="Answered questions"/>  				
  			</Tabs>  
  		 </AppBar>         
 		<TabPanel value={value} index={0} displayUnanswered={true} questionIds={this.props.questionIds}/>
        <TabPanel value={value} index={1} displayUnanswered={false} questionIds={this.props.questionIds}/>
      </div>
    )
  }
}

function TabPanel(props){
 const {value, index, displayUnanswered, questionIds} = props
  return (
    value===index && 
    <div className="tab">
    	<ul className="dashboard-list">
                 	{questionIds.map((id)=>(
                         <li key={id}>                          
                             <Question id={id} displayUnanswered={displayUnanswered}/>
                         </li>
                     ))}
		 </ul> 
    </div>

  )
}

function  mapStateToProps({questions}) {
    return{     
      questionIds : Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(QuestionList)
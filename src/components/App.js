
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData} from  '../actions/shared'
import Login from './Login'
import QuestionDetailsView from './QuestionDetailsView'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import QuestionList from './QuestionList'


class App extends Component {
  componentDidMount(){
  this.props.dispatch(handleInitialData())    
  }
  render(){
    return (
      <Router>
      <Fragment>
           <div className="App"> 
      	   <Nav/>
          {this.props.loading === true
          ? <Login />
         : <div>
              <Route path='/' exact component={QuestionList}/>
              <Route path='/question/:id' exact component={QuestionDetailsView} />
              <Route path='/add'  component={NewQuestion}/>
              <Route path='/leaderboard'  component={Leaderboard}/>
      	   </div>}
      </div>
      </Fragment>
      </Router>
 
    );
	}
}
function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

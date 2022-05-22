import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { getUsers, receiveQuestionAnswer, receiveNewQuestion } from './users'
import { getQuestions, saveQuestionVote, addNewQuestion } from './questions'

export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData()
    .then(({users, questions})=>{
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
    })
    }
  }

  export function handleSaveQuestionVote(vote){
     return (dispatch)=>{
       return saveQuestionAnswer(vote)
       .then(()=>{
         dispatch(saveQuestionVote(vote))
         dispatch(receiveQuestionAnswer(vote))
       })     
        .catch((e)=>{
             console.warn('Error in saveQuestionAnswer: ', e)
             alert('There was an error saving answer.Try again')
         })
     }
   }

export function handleSaveQuestion({optionOneText, optionTwoText}){
  return (dispatch, getState)=>{
    const {authedUser} = getState()
       
    const question = {optionOneText, optionTwoText , author: authedUser.user.id}
       return saveQuestion(question)
    		.then((savedQuestion)=>{
              dispatch(addNewQuestion(savedQuestion))
              dispatch(receiveNewQuestion(savedQuestion))
    		})    
        	.catch((e)=>{
             console.warn('Error in saveQuestion: ', e)
             alert('There was an error saving answer.Try again')
         })
     }
}

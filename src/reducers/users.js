import {GET_USERS, RECEIVE_QUESTION_ANSWER, RECEIVE_NEW_QUESTION} from '../actions/users'

export default function users(state = {}, action){
    switch(action.type){
        case GET_USERS :
            return {
                ...state,
                ...action.users
            }
      case RECEIVE_QUESTION_ANSWER:
        return {
          ...state,
           [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          	}
           }
        }
      case RECEIVE_NEW_QUESTION:
        return{
          ...state,
          [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
          }
        }
       default:
            return state
    }
}
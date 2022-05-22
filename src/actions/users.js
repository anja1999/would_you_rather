export const GET_USERS = 'GET_USERS'
export const RECEIVE_QUESTION_ANSWER = 'RECEIVE_QUESTION_ANSWER'
export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION"

export function getUsers(users){
  return {
    type: GET_USERS,
    users
  }
} 
  export function receiveQuestionAnswer({authedUser, qid, answer }){
    return {
      type:RECEIVE_QUESTION_ANSWER,
      authedUser,
      qid,
      answer
    }
  }

export function receiveNewQuestion(question){
  return {
    type: RECEIVE_NEW_QUESTION,
    question
  }
}

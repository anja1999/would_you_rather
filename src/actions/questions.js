export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION"

export function getQuestions(questions){
  return{
      type: GET_QUESTIONS,
      questions,
  }
}

export function saveQuestionVote({authedUser, qid, answer }){
  return {
    type:SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }  
}

export function addNewQuestion(question){
  return {
    type:ADD_NEW_QUESTION,
    question
  }
}


  

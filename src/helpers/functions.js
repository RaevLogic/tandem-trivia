export function formatQuestions(triviaArray) {
  let questions = []

  questions = triviaArray.map((trivia) => {
    const formattedQuestion = {
      question: trivia.question,
      answers: []
    }

    const answerChoices = [...trivia.incorrect]
    let placeAnswer = Math.floor(Math.random() * 4) + 1
    answerChoices.splice(
      placeAnswer - 1,
      0,
      trivia.correct
    )

    answerChoices.forEach((choice) => {
      if (choice === trivia.correct) {
        formattedQuestion.answers.push({answer: choice, correct: true})
      } else {
        formattedQuestion.answers.push({answer: choice})
      }
    })

    return formattedQuestion
  })
  console.log(questions, '1')
  return questions
}

export function tenQuestions(questions) {
  let questionsLeft = 21
  let finalQuestions = []
  let index = 0

  while (finalQuestions.length < 10) {
    index = randomNum(questionsLeft)
    finalQuestions.push(questions[index])
    questions.splice(index, 1)
    questionsLeft--
  }
  return finalQuestions
}

function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
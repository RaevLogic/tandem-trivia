<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Tandem Trivia</h1>
      </div>   
      <div class="quiz-main" v-for="(element, index) in questions.slice(a, b)" :key="index" v-show="quiz">
        <div class="box-question">
          <h2>Question {{ b }}/{{ questions.length }}</h2>
          <p>{{ element.question }}</p>
        </div>
        <div class="box-answers">
          <ul>
            <li v-for="item in element.answers" :key="item" :class="select ? check(item) : ''" @click="selectResponse(item)">{{ item.answer }}</li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="scoreShow">
        <h2>Your score is</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">Restart</button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button @click="nextQuestion">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatQuestions, tenQuestions } from './helpers/functions'
const trivia = require('./assets/questions.json')

let formattedTrivia = formatQuestions(trivia)
let finalTrivia = tenQuestions(formattedTrivia)
console.log(finalTrivia)

export default {
  name: 'App',
  data() {
    return {
      questions: finalTrivia,
      a: 0,
      b: 1,
      select: false,
      score: 0,
      quiz: true,
      scoreShow: false,
      next: false
    }
  },
  methods: {
    selectResponse(e) {
      this.select = true
      this.next = true

      if (e.correct) {
        this.score++
      }
    },
    check(status) {
      return (status.correct ? 'correct' : 'incorrect')
    },
    nextQuestion() {
      if (!this.next) {
        return
      }
      if (this.questions.length - 1 == this.a) {
        this.scoreShow = true
        this.quiz = false
      } else {
        this.a++
        this.b++
        this.select = false
        this.next = false
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.container-quiz {
  display: flex;
  width: 40%;
  height: 85%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  flex-flow: column;
  text-align: center;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.quiz-header {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #2c3e50;
  justify-content: center;
  align-items: center;
  background-color: azure;
  border-radius: 10px 10px 0px 0px;
}
.quiz-main {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}
.quiz-footer {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #2c3e50;
  background-color: azure;
  border-radius: 0px 0px 10px 10px;
}
.box-question {
  margin-top: 20px;
}
.box-answers {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
}
ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}
ul li {
  list-style: none;
  line-height: 2;
  border: 1px solid #2c3e50;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
}
li:hover {
  background-color: rgb(194, 191, 191);
}
.box-button {
  display: flex;
  width: 100%;
}
.box-button button{
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: #2c3e50;
}
li.correct {
  border: 1px solid green;
  background-color: green;
  color: white;
  font-weight: 600;
}
li.incorrect {
  border: 1px solid red;
  background-color: red;
  color: white;
  font-weight: 600;
}
.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}
.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 25px;
}
.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: #2c3e50;
}

@media Screen and (max-width: 900px) {
  .container-quiz {
    width:60%;
  }
}

@media Screen and (max-width: 720px) {
  .container-quiz {
    width:80%;
  }
  .box-button button {
    width: 100px;
  }
}
</style>

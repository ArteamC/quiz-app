<script setup>
import { ref, computed } from 'vue'
import { questions } from './data/questions.js'
import QuestionCard from './components/QuestionCard.vue'
import ResultScreen from './components/ResultScreen.vue'

// State of the quiz
const currentIndex = ref(0)
const score = ref(0)
const finished = ref(false)

// The question currently displayed
const currentQuestion = computed(() => questions[currentIndex.value])

// Called when the user answers: add a point if the answer is correct
function handleAnswered(isCorrect) {
  if (isCorrect) score.value++
}

// Go to the next question, or finish the quiz after the last one
function nextQuestion() {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
  } else {
    finished.value = true
  }
}

// Start over
function restart() {
  currentIndex.value = 0
  score.value = 0
  finished.value = false
}
</script>

<template>
  <main class="app">
    <h1>Quiz App</h1>

    <template v-if="!finished">
      <p class="score">Score: {{ score }}</p>
      <!-- :key forces a fresh QuestionCard for each question -->
      <QuestionCard
        :key="currentIndex"
        :question="currentQuestion"
        :number="currentIndex + 1"
        :total="questions.length"
        @answered="handleAnswered"
        @next="nextQuestion"
      />
    </template>

    <ResultScreen v-else :score="score" :total="questions.length" @restart="restart" />
  </main>
</template>

<style scoped>
.app { max-width: 500px; margin: 30px auto; padding: 0 15px; }
h1 { text-align: center; color: #35495e; }
.score { text-align: right; font-weight: bold; }
</style>
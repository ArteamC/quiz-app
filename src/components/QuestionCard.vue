<script setup>
import { ref } from 'vue'

// Data received from the parent (App.vue)
const props = defineProps({
  question: { type: Object, required: true },
  number: { type: Number, required: true },
  total: { type: Number, required: true },
})

// Events this component can send to its parent
const emit = defineEmits(['answered', 'next'])

// Index of the option clicked by the user (null = no answer yet)
const selectedIndex = ref(null)

function choose(index) {
  // Ignore clicks once an answer has been given
  if (selectedIndex.value !== null) return
  selectedIndex.value = index
  // Tell the parent whether the answer was correct
  emit('answered', index === props.question.correctIndex)
}

// CSS class of an option, used to show right and wrong answers
function optionClass(index) {
  if (selectedIndex.value === null) return ''
  if (index === props.question.correctIndex) return 'correct'
  if (index === selectedIndex.value) return 'wrong'
  return ''
}
</script>

<template>
  <div class="card">
    <p class="progress">Question {{ number }} / {{ total }}</p>
    <h2>{{ question.text }}</h2>

    <button
      v-for="(option, index) in question.options"
      :key="index"
      class="option"
      :class="optionClass(index)"
      :disabled="selectedIndex !== null"
      @click="choose(index)"
    >
      {{ option }}
    </button>

    <p v-if="selectedIndex !== null" class="feedback">
      {{ selectedIndex === question.correctIndex ? 'Correct!' : 'Incorrect.' }}
    </p>

    <button v-if="selectedIndex !== null" class="next" @click="emit('next')">
      {{ number === total ? 'See results' : 'Next question' }}
    </button>
  </div>
</template>

<style scoped>
.card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }
.progress { color: #666; margin: 0 0 10px; }
.option { display: block; width: 100%; margin: 8px 0; padding: 10px; text-align: left; font-size: 1em; color: #222; background: #f5f5f5; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; }
.option:hover:not(:disabled) { background: #e8eef5; }
.option:disabled { cursor: default; }
.option.correct { background: #c8e6c9; border-color: #2e7d32; }
.option.wrong { background: #ffcdd2; border-color: #c62828; }
.feedback { font-weight: bold; }
.next { margin-top: 10px; padding: 10px 16px; font-size: 1em; color: white; background: #42b883; border: none; border-radius: 6px; cursor: pointer; }
.next:hover { background: #36996e; }
</style>
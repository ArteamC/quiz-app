<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: { type: Number, required: true },
  total: { type: Number, required: true },
})

const emit = defineEmits(['restart'])

// Message depending on the score
const message = computed(() => {
  const ratio = props.score / props.total
  if (ratio === 1) return 'Perfect score, great job!'
  if (ratio >= 0.5) return 'Good effort, almost there!'
  return 'Try again!'
})
</script>

<template>
  <div class="result">
    <h2>Quiz finished</h2>
    <p class="final">Your score: {{ score }} / {{ total }}</p>
    <p>{{ message }}</p>
    <button @click="emit('restart')">Restart quiz</button>
  </div>
</template>

<style scoped>
.result { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); text-align: center; }
.final { font-size: 1.4em; font-weight: bold; }
button { padding: 10px 16px; font-size: 1em; color: white; background: #42b883; border: none; border-radius: 6px; cursor: pointer; }
button:hover { background: #36996e; }
</style>
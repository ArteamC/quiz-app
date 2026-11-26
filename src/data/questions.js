// The list of quiz questions.
// Each question has a text, a list of options and the index (0, 1, 2...)
// of the correct option.
export const questions = [
  {
    text: 'Which directive displays an element only if a condition is true?',
    options: ['v-for', 'v-if', 'v-model', 'v-bind'],
    correctIndex: 1,
  },
  {
    text: 'Which directive creates a two-way binding on an input field?',
    options: ['v-on', 'v-show', 'v-model', 'v-html'],
    correctIndex: 2,
  },
  {
    text: 'What does the v-for directive do?',
    options: [
      'Handles click events',
      'Repeats an element for each item of a list',
      'Binds an attribute to a value',
      'Hides an element',
    ],
    correctIndex: 1,
  },
  {
    text: 'Which special attribute is used to pass data from a parent to a child component?',
    options: ['props', 'emit', 'slot', 'ref'],
    correctIndex: 0,
  },
  {
    text: 'Which method does a child component use to send an event to its parent?',
    options: ['$send', '$emit', '$push', '$call'],
    correctIndex: 1,
  },
]
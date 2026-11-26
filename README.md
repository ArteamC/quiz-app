# Quiz App

A quiz application built with Vue 3 and Vite. Questions are displayed one at a time, the score is counted as you answer, and the result is shown at the end.

## Features

- One question displayed at a time
- Immediate feedback: the correct answer turns green, a wrong answer turns red
- Score counter updated during the quiz
- Result screen with the final score and a message
- Restart button to play again

## Installation

1. Install [Node.js](https://nodejs.org/) (version 18 or higher)
2. Clone the repository:

```
git clone https://github.com/ArteamC/quiz-app.git
cd quiz-app
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open the address shown in the terminal (usually `http://localhost:5173/`).

## Usage

1. Read the question and click on one of the options.
2. The correct answer is highlighted. Click **Next question** to continue.
3. After the last question, click **See results** to see your score.
4. Click **Restart quiz** to start again.

## Project structure

```
src/
├── App.vue                  # Main component: quiz state (current question, score)
├── components/
│   ├── QuestionCard.vue     # Displays one question and its options
│   └── ResultScreen.vue     # Displays the final score
└── data/
    └── questions.js         # The list of questions
```

## Customizing the quiz

To change the questions, edit `src/data/questions.js`. Each question has a `text`, a list of `options` and the `correctIndex` of the right answer (starting at 0).

## Built with

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
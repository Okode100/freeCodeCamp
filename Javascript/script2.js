const questions = [
  {
    category: "Multiple choice questions",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Barack Obama", "Ruto"],
    answer: "George Washington"
  },
  {
    category: "Closed-Ended Questions",
    question: "Did you attend the conference last week?",
    choices: ["Yes", "No", "Maybe"],
    answer: "Yes"
  },
  {
    category: "Leading Questions",
    question: "What sex category do you belong to?",
    choices: ["Male", "Female", "Other"],
    answer: "Male"
  },
  {
    category: "Multiple choice questions",
    question: "How many counties are there in Kenya?",
    choices: ["47", "30", "100"],
    answer: "47"
  },
  {
    category: "Multiple choice questions",
    question: "How many races are there in the world?",
    choices: ["3", "6", "2"],
    answer: "2"
  }
];

// ✅ Get a random question
function getRandomQuestion(questions) {
  const random = Math.floor(Math.random() * questions.length);
  return questions[random];
}

// ✅ Get a random computer choice
function getRandomComputerChoice(choices) {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// ✅ Get result based on computer choice and actual answer
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// Example usage:
const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
console.log("Question:", question.question);
console.log("Choices:", question.choices);
console.log("Computer picked:", computerChoice);
console.log(getResults(question, computerChoice));

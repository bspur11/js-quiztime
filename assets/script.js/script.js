var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');


var shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion();
});

function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove('hide');
  setNextQuestion();

}


function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}


function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

var questions = [{
    question: 'Commonly used data types do not include______',
    answers: [{
        text: 'Boleans',
        correct: false
      },
      {
        text: 'Other Arrays',
        correct: false
      },
      {
        text: 'Numbers',
        correct: false
      },
      {
        text: 'Alerts',
        correct: true
      }
    ]
  },
  {
    question: 'A very useful tool used during developement and debugging for printing content to the debugger is _____.',
    answers: [{
        text: 'JavaScript',
        correct: false
      },
      {
        text: 'Terminal/Bash',
        correct: false
      },
      {
        text: 'For Loops',
        correct: false
      },
      {
        text: 'Console log',
        correct: true
      }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store__________?',
    answers: [{
        text: 'numbers and strings',
        correct: true
      },
      {
        text: 'other arrays',
        correct: true
      },
      {
        text: 'booleans',
        correct: true
      },
      {
        text: 'all of the above',
        correct: true
      }
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed with________?',
    answers: [{
        text: 'quotes',
        correct: false
      },
      {
        text: 'curly brackets',
        correct: true
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: true
      }
    ]
  },
  {
    question: 'String values in JavaScript must be inclosed in _______.',
    answers: [{
        text: 'quotes',
        correct: true
      },
      {
        text: 'curly brackets',
        correct: false
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: false
      }
    ]


  }
]
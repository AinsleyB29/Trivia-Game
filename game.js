const question = document.querySelector('#question');
const selections = Array.from(document.querySelectorAll('.selection-text'));

let currentOption = {};
let receivingAnswers = true;
let questionAccumulator = 0;
let accessibleQuestions = [];

let questions = [
  {
    question: 'What word is used to describe the employees work personas?',
    selection1: 'Innie',
    selection2: 'Inner',
    selection3: 'Insider',
    answer: 1,
  },
  {
    question: 'What is the name of the department Mark works in?',
    selection1: 'Data extraction group',
    selection2: 'Macrodata processing',
    selection3: 'Macrodata Refinement',
    answer: 3,
  },
  {
    question: 'What is the title of the book that Rickon gifts to Mark?',
    selection1: 'The You Within',
    selection2: 'The You You Are',
    selection3: 'The You That Yearns',
    answer: 2,
  },
  {
    question: 'What is the break room?',
    selection1: 'Where all the employees at Lumon take their meal breaks',
    selection2: 'A room for employees to unwind and have therapy sessions',
    selection3:
      'A place where insubordinate employees are confined and tortured',
    answer: 3,
  },
  {
    question: 'What is the procedure to unsever yourself called?',
    selection1: 'Reintegration',
    selection2: 'Recollection',
    selection3: 'Remembrance',
    answer: 1,
  },
  {
    question:
      'What animals did Helly and Mark discover on their mental health walk?',
    selection1: 'Pigs',
    selection2: 'Miniature schnauzers',
    selection3: 'Baby goats',
    answer: 3,
  },
  {
    question:
      'Which quote can be found at the entrance of the Perpetuity Wing?',
    selection1:
      'Come now children of my industry, and know the children of my blood',
    selection2: 'The remembered man does not decay',
    selection3: 'We must be cut to heal',
    answer: 2,
  },
  {
    question:
      'Which genre of music was performed at the concert Mark took Alexa to?',
    selection1: 'Hip-hop',
    selection2: 'Trash metal',
    selection3: 'Alternative',
    answer: 2,
  },
  {
    question: 'What did Ricken say separates man from machine?',
    selection1: 'Machines cannot think for themselves',
    selection2: "Machines do what they're told",
    selection3: 'Machines cannot lie',
    answer: 1,
  },
  {
    question: 'Where did Kier Eagan meet his wife?',
    selection1: 'In an oil factory',
    selection2: 'At Lumon Industries',
    selection3: 'In an ether factory',
    answer: 3,
  },
];

clockIn = () => {
  questionAccumulator = 0;
  accessibleQuestions = [...questions];
  getNextQuestion();
};

getNextQuestion = () => {
  // BUILD OUT LOGIC
};

//call it
clockIn();

selections.addEventListener('click');

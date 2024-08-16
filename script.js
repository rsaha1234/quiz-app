const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false  },
            { text: 'Paris', correct: true},
            { text: ' Rome', correct: false }
        ]
    },
    {
        question: ' Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct:false  },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false },
            
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet?',
        answers: [
            { text: 'William Shakespeare ', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Mark Twain', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '1', correct: false},
            { text: '2', correct: true  },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'Which is the longest river in the world?',
        answers: [
            { text: 'Amazon River', correct:false },
            { text: 'Nile River', correct: true  },
            { text: 'Mississippi River', correct: false },
            { text: 'Yangtze River', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'O2', correct: false },
            { text: 'CO2', correct: false },
            { text: 'H2O', correct: true },
            { text: 'NO2', correct: false }
        ]
    },
    {
        question: 'Who is known as the "Father of Computers"?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Charles Babbage', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Alan Turing', correct: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?',
        answers: [
            { text: 'Helium', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Oxygen', correct: false },
            { text: 'Nitrogen', correct: false }
        ]
    },
    {
        question: 'Which ocean is the largest by surface area?',
        answers: [
            { text: 'Atlantic Ocean', correct:false  },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: ' Michelangelo', correct: false }
        ]
    }
    // Add more questions as needed
];

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(button, correct) {
    const buttons = document.querySelectorAll('.btn');
    const correctAnswer = questions[currentQuestionIndex].answers.find(ans => ans.correct).text;

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add('correct'); // Highlight the correct answer
        }
    });

    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect'); // Highlight the selected wrong answer
    }

    nextButton.style.display = 'block'; // Show the Next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
    nextButton.style.display = 'none';
}

function showResults() {
    questionElement.innerText = `Quiz Completed! Your score is ${score} out of ${questions.length}.`;
    answerButtonsElement.innerHTML = '';
    nextButton.style.display = 'none';
}

showQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener('click', nextQuestion);

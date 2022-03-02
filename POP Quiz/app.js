const quiz = [
    {
        question: 'Who won the DCI championship in 2019?',
        option: [
            'Blue Devils',
            'Santa Clara Vanguard',
            'The Bluecoats',
            'Carolina Crown'
        ],
        answer: 'Blue Devils'
    },
    {
        question: 'How many time did Mystique won the championship?',
        option: [
            '5',
            '6',
            '7',
            '8'
        ],
        answer: '8'
    },
    {
        question: 'Who is the director at Rhythm X',
        option: [
            'Josh Nelson',
            'Tim Fairbanks',
            'Scott Johnson',
            'Paul Rennick'
        ],
        answer: 'Tim Fairbanks'
    }
];

const $button = document.getElementsByTagName('button');
const quizLength = quiz.length;
let quizIndex = 0;
let point = 0;

const setupQuiz = ()=> {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    for(let i = 0; i < $button.length; i++){
        $button[i].textContent = quiz[quizIndex].option[i];
    }
}

setupQuiz();

const ClickHandler = (e)=> {
    let opinion = e.target.textContent;
    if(quiz[quizIndex].answer === opinion){
        window.alert('CORRECT!!!');
        point++;
    } else {
        window.alert('Ooops, wrong answer...');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('Result : ' + point + '/' + quizLength);
    }
}

for(let i = 0; i < $button.length; i++){
    $button[i].addEventListener('click', (e)=> {
        ClickHandler(e);
    });
}
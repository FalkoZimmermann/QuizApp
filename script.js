let questions = [
    {
        "question": "Wie viele Tage hat der Dezmber?",
        "answer_1": "31 Tage",
        "answer_2": "42 Tage",
        "answer_3": "30 Tage",
        "answer_4": "28 Tage",
        "right_answer": 1
    },
    {
        "question": "Wie wurde Twix früher genannt?",
        "answer_1": "Unix",
        "answer_2": "Pikashu",
        "answer_3": "Raiders",
        "answer_4": "Mars",
        "right_answer": 3
    },
    {
        "question": "Wie nennt man einen männlichen Hund?",
        "answer_1": "Rudolf",
        "answer_2": "Eber",
        "answer_3": "Kids",
        "answer_4": "Rüde",
        "right_answer": 4
    },
    {
        "question": "Wie oft wird der Oscar verliehen?",
        "answer_1": "Jährlich",
        "answer_2": "Alle zwei Jahre",
        "answer_3": "Alle fünf Jahre",
        "answer_4": "Solch eine Verleihung gibt es nicht",
        "right_answer": 1
    },
    {
        "question": "Wie hoch ist die Gewichtskraft g auf der Erde?",
        "answer_1": "91.08 m/s²",
        "answer_2": "9.0081 m/s²",
        "answer_3": "9.81 m/s²",
        "answer_4": "9.81 km/h",
        "right_answer": 3
    },
    {
        "question": "Wie hoch ist der Eifelturm?",
        "answer_1": "324 Meter",
        "answer_2": "290 Meter",
        "answer_3": "254 Meter",
        "answer_4": "420 Meter",
        "right_answer": 1
    },
    {
        "question": "Welches ist das höchste Bauwerk in Deutschland?",
        "answer_1": "Kölner Doom",
        "answer_2": "Comerzbank Tower in Frankfurth",
        "answer_3": "Marinefunksendestelle Rhauderfehn",
        "answer_4": "Berliner Fernsehturm",
        "right_answer": 4
    },
    {
        "question": "Wie hieß der Hund in der Serie Lassie?",
        "answer_1": "Pluto",
        "answer_2": "Balu",
        "answer_3": "Lassie",
        "answer_4": "Nemo",
        "right_answer": 3
    },
    {
        "question": "Wann war die Schlacht bei Issos?",
        "answer_1": "333 v.Chr.",
        "answer_2": "333 n.Chr.",
        "answer_3": "973 n.Chr.",
        "answer_4": "647 n.Chr.",
        "right_answer": 1
    },
    {
        "question": "Wie hoch ist der Mount Everest?",
        "answer_1": "880 Meter",
        "answer_2": "8848 Meter",
        "answer_3": "7642 Meter",
        "answer_4": "2789 Meter",
        "right_answer": 2
    },
    {
        "question": "Wer entdeckte America wirklich?",
        "answer_1": "Columbus",
        "answer_2": "Die Engländer",
        "answer_3": "Nordische Vikinger",
        "answer_4": "Die Azteken",
        "right_answer": 3
    },
    {
        "question": "Welchen Decknamen bekam der Anschlag auf Hitler am 20.07.1944 ?",
        "answer_1": "Operation Freiheit",
        "answer_2": "Operation Valkyrie",
        "answer_3": "Operation Nato",
        "answer_4": "Operation Europa",
        "right_answer": 2
    },
];

let takeQuestion = 0;

function firstLoad() {
    document.getElementById('number-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[takeQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[takeQuestion]; 
    console.log('Selection answer is ', selection); 
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selctedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Right answer');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('wrong answer');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}
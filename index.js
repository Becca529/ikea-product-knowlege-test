'use strict';

//questions, answers, and images for quiz data
const STORE = [
	{
    num : 1,
    question : `What is the name of this rug?`, 
    img: `'https://www.ikea.com/us/en/images/products/rens-sheepskin-white__28331_PE097271_S4.JPG' alt="white fur rug"`,
    choices :[`URSKOG`,`TRAMPA`,`RENS`,`LINDELSE`],
    answer : `RENS`,
	},

	{
    num : 2,
    question : `What is the name of this dining room table?`, 
    img: `'https://www.ikea.com/us/en/images/products/norden-extendable-table__0206573_PE360691_S4.JPG' alt="birch wood table"`,
    choices :[`NORDEN`,`ASKHOLMEN`,`FANBYN`,`EKEDALEN`],
    answer : `NORDEN`,
	},
	{
    num : 3,
    question : `What is the name of this bookcase?`, 
    img: `'https://www.ikea.com/us/en/images/products/billy-bookcase-white__0252255_PE391058_S4.JPG' alt="white wood bookcase"`,
    choices :[`HEMNES`,`LIATORP`,`BRIMNES`,`BILLY`],
    answer : `BILLY`,
	},
	{
    num : 4,
    question : `What is the name of this armchair?`, 
    img: `'https://www.ikea.com/us/en/images/products/pello-armchair-beige__38296_PE130209_S4.JPG' alt="white armchair"`,
    choices :[`STRANDMOM`,`POANG`,`PELLO`,`KIVIK`],
    answer : `POANG`,
	},
	{
    num : 5,
    question : `What is the name of this side table?`, 
    img: `'https://www.ikea.com/us/en/images/products/lack-side-table-black__22518_PE107397_S4.JPG' alt="small black side table"`,
    choices :[`GLADOM`,`VEJMON`,`LACK`,`NYBODA`],
    answer : `LACK`,
	},
  {
   num : 6,
    question : `What is the name of this picture frame?`, 
    img: `'https://www.ikea.com/us/en/images/products/ribba-frame-black__20730_PE105852_S4.JPG' alt="black picture frame"`,
    choices :[`RIBBA`,`HOVASTA`,`VIRSERUM`,`ALGOT`],
    answer : `RIBBA`,
	},
  {
    num : 7,
    question : `What is the name of this shelf unit?`, 
    img: `'https://www.ikea.com/us/en/images/products/kallax-shelf-unit__0459262_PE606055_S4.JPG' alt="turquoise self unit"`,
    choices :[`IVAR`,`INDUSTRIELL`,`KALLAX`,`LIXHULT`],
    answer : `KALLAX`,
	},
  {
    num : 8,
    question : `What is the name of this bed frame?`, 
    img: `'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-storage-boxes__0240117_PE379800_S4.JPG' alt="oak bed frame with storage"`,
    choices :[`SONGESAND`,`MALM`,`GODFJORD`,`TOMREFJORD`],
    answer : `MALM`,
	},
  {
    num : 9,
    question : `What is the name of this loveseat?`, 
    img: `'https://www.ikea.com/us/en/images/products/klippan-loveseat-gray__0239990_PE379591_S4.JPG' alt="grey loveseat"`,
    choices :[`KIVIK`,`STOCKSUN`,`VIMLE`,`KLIPPAN`],
    answer : `KLIPPAN`,
	},
  {
    num : 10,
    question : `What does IKEA stand for?`,
    choices :[`Insanity Killjoy Emotional-breakdowns and Anarchy`,`Something in Swedish?`,`a giant maze with cinnamon buns at the end`,`Ingvar Kamprad (the founder), Elmtaryd (the farm in which he grew up) and Agunnaryd (the village in which he grew up)`],
    img : `'https://live105.ca/wp-content/uploads/2017/08/ikea3-1200x730.jpg' alt="ikea logo" class="ikea-logo"`,
    answer : `Ingvar Kamprad (the founder), Elmtaryd (the farm in which he grew up) and Agunnaryd (the village in which he grew up)`,
	},
];

//global variables to keep track of current quiz question num and score 
let questionNumber = 0;
let score = 0;

//starts the quiz - removes start/welcome content and runs the loadQuestion function to display the first question.
function startQuiz() {
  $('.js-quiz-content').on('click', '#js-start-button',function(event) {
    $('.js-start-content').remove();
    $('.question-number').text(1);
    loadQuestion();  
  });
}

//calls the createQuestionForm to create the question form and then display the html question form
function loadQuestion () {
  $('.js-quiz-content').html(createQuestionForm());
}

//generates question html or if the last question displays the quiz results by calling loadResults function
function createQuestionForm () {
  if (questionNumber < STORE.length) {
    return (`<div class="question-${questionNumber} questions">
    <h2>${STORE[questionNumber].question}</h2>
    <form role="form">
     <fieldset>
        <label class="answerOption">
          <input type="radio" value="${STORE[questionNumber].choices[0]}" name="answer"
          <span>${STORE[questionNumber].choices[0]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${STORE[questionNumber].choices[1]}" name="answer" required>
          <span>${STORE[questionNumber].choices[1]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${STORE[questionNumber].choices[2]}" name="answer" required>
          <span>${STORE[questionNumber].choices[2]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${STORE[questionNumber].choices[3]}" name="answer" required>
          <span>${STORE[questionNumber].choices[3]}</span>
        </label>
        <button type="submit" class="submit-button">Submit</button>
      </fieldset>
    </form>
    <div class="product-img"><img src=${STORE[questionNumber].img} class="product-img"></div>
    </div>`);
  } else {
      loadResults();
      $('.question-number').text(10)
      restartQuiz();
  }
}

//when quiz is over this function displays the results html page (2 options)
function loadResults () {
  if (score >= 6) {
    $('.js-quiz-content').html(
      `<div class="results">
          <h2>Great Job!</h2>
          <p>You got ${score} / 10</p>
          <button class="js-restart-button">Restart Quiz</button>
          <img src="https://www.ikea.com/PIAimages/0124562_PE281302_S5.JPG" alt="treat yourself - yummy cinnamon roll"class="treat">
        </div>`);
  } 
  else {
    $('.js-quiz-content').html(`
      <div class="results">
        <h2>Nice try!</h2>
        <p>You got ${score} / 10</p>
        <button class="js-restart-button">Restart Quiz</button>
        <img src="https://www.ikea.com/PIAimages/0124562_PE281302_S5.JPG" alt="treat yourself - yummy cinnamon roll" class="treat">
      </div>`);
  }
}

//when user selects the submit button on the question form 
//this function checks if the correct anwser has been submited then calls the feedback function
function submitAnswer() {
  $('.js-quiz-content').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let userAnswer = selected.val();
    let correctAnswer = STORE[questionNumber].answer;

    if (userAnswer === correctAnswer) {
      answerIsCorrect();
    } else {
      answerIsIncorrect();
    }
  });
}

//calls correct feedback function and update score function
function answerIsCorrect () {
  answerFeedbackCorrect();
  updateScore();
}

//calls incorrect feedback function 
function answerIsIncorrect () {
  answerFeedbackIncorrect();
}

//updates score and score text on page
function updateScore () {
  score++;
  $('.score').text(score);
}

//feedback for correct answer
function answerFeedbackCorrect () {
  let correctAnswer = `$STORE[questionNumber].answer}`;
  $('.js-quiz-content').html(`
    <div class="feedback">
      <h2>Great Swedish Meatballs – You got it right! Great Job!</h2>
      <button type=button class="next-button">Next</button>
      <div><img src="https://media1.tenor.com/images/318f9e83ebe7b30a3f0e9cc10d2082ae/tenor.gif?itemid=5713208" alt="happy meatball" class="feedback-img"></div>
    </div>`);
}

//feedback for incorrect answer
function answerFeedbackIncorrect () {
  let correctAnswer = STORE[questionNumber].answer;
  $('.js-quiz-content').html(`
    <div class="feedback">
      <h2>You got it wrong</h2>
      <p><h2>the correct answer is <span>"${correctAnswer}"</span></h2></p>
      <button type=button class="next-button">Next</button>
      <div><img src="https://static.giantbomb.com/uploads/original/0/216/307220-6.gif" alt="sad meatwad" class="feedback-img"></div>
    </div>`);
}
//when user selects the Next button on the feedback page this function updates the questionNumber 
//and calls loadQuestion for the next question to be displayed
function nextQuestion () {
  $('.js-quiz-content').on('click', '.next-button', function (event) {
    updateQuestionNumber();
    loadQuestion();
  });
}

//increments the question number by 1 
function updateQuestionNumber () {
    questionNumber ++;
  $('.question-number').text(questionNumber+1);
}


// reloads the quiz app when user clicks the restart button
function restartQuiz() {
  $('.js-quiz-content').on('click', '.js-restart-button', function (event) {
    score= 0;
    questionNumber = 0;
    $('.score').text(score);
    $('.question-number').text(questionNumber)
    loadWelcomeText();
  });
}

//loads welcome text and quiz start button
function loadWelcomeText(){
  $('.js-quiz-content').html(
    `<div class= "js-start-content">
      <h1>Name that IKEA Product Quiz!</h1>
      <h2>Are you ready to put your IKEA product knowledge to the test?</h2> 
      <button id="js-start-button" type="button">Start</button>
    </div>`);
}

// callback when page loads
function handleQuiz() {
  loadWelcomeText();
  startQuiz();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

// when the page loads call handleQuiz
$(handleQuiz);
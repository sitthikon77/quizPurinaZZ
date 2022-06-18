var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {

  if (this.readyState === 4) {
    // console.log(this.responseText);

    var myQUIZ = this.responseText;

    var objQUIZ = JSON.parse(myQUIZ);
    console.log(objQUIZ);

    var list_question = objQUIZ.list_question;
    localStorage.setItem('list_question', JSON.stringify(list_question));

    // QUESTION
    var question_1 = {
      question_id: list_question[0].question_id,
      question: list_question[0].question,
    }
    localStorage.setItem('question_1', JSON.stringify(question_1));

    var question_2 = {
      question_id: list_question[1].question_id,
      question: list_question[1].question,
    }
    localStorage.setItem('question_2', JSON.stringify(question_2));

    var question_3 = {
      question_id: list_question[2].question_id,
      question: list_question[2].question,
    }
    localStorage.setItem('question_3', JSON.stringify(question_3));

    var question_4 = {
      question_id: list_question[3].question_id,
      question: list_question[3].question,
    }
    localStorage.setItem('question_4', JSON.stringify(question_4));

    var question_5 = {
      question_id: list_question[4].question_id,
      question: list_question[4].question,
    }
    localStorage.setItem('question_5', JSON.stringify(question_5));

    var question_6 = {
      question_id: list_question[5].question_id,
      question: list_question[5].question,
    }
    localStorage.setItem('question_6', JSON.stringify(question_6));

    var question_7 = {
      question_id: list_question[6].question_id,
      question: list_question[6].question,
    }
    localStorage.setItem('question_7', JSON.stringify(question_7));

    var question_8 = {
      question_id: list_question[7].question_id,
      question: list_question[7].question,
    }
    localStorage.setItem('question_8', JSON.stringify(question_8));

    var question_9 = {
      question_id: list_question[8].question_id,
      question: list_question[8].question,
    }
    localStorage.setItem('question_9', JSON.stringify(question_9));

    var question_10 = {
      question_id: list_question[9].question_id,
      question: list_question[9].question,
    }
    localStorage.setItem('question_10', JSON.stringify(question_10));

    // ANSWER
    var ans_1 = list_question[0].ans_1;
    localStorage.setItem('ans_0_1', JSON.stringify(ans_1));
    var ans_2 = list_question[0].ans_2;
    localStorage.setItem('ans_0_2', JSON.stringify(ans_2));
    var ans_3 = list_question[0].ans_3;
    localStorage.setItem('ans_0_3', JSON.stringify(ans_3));
    var ans_4 = list_question[0].ans_4;
    localStorage.setItem('ans_0_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[1].ans_1;
    localStorage.setItem('ans_1_1', JSON.stringify(ans_1));
    var ans_2 = list_question[1].ans_2;
    localStorage.setItem('ans_1_2', JSON.stringify(ans_2));
    var ans_3 = list_question[1].ans_3;
    localStorage.setItem('ans_1_3', JSON.stringify(ans_3));
    var ans_4 = list_question[1].ans_4;
    localStorage.setItem('ans_1_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[2].ans_1;
    localStorage.setItem('ans_2_1', JSON.stringify(ans_1));
    var ans_2 = list_question[2].ans_2;
    localStorage.setItem('ans_2_2', JSON.stringify(ans_2));
    var ans_3 = list_question[2].ans_3;
    localStorage.setItem('ans_2_3', JSON.stringify(ans_3));
    var ans_4 = list_question[2].ans_4;
    localStorage.setItem('ans_2_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[3].ans_1;
    localStorage.setItem('ans_3_1', JSON.stringify(ans_1));
    var ans_2 = list_question[3].ans_2;
    localStorage.setItem('ans_3_2', JSON.stringify(ans_2));
    var ans_3 = list_question[3].ans_3;
    localStorage.setItem('ans_3_3', JSON.stringify(ans_3));
    var ans_4 = list_question[3].ans_4;
    localStorage.setItem('ans_3_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[4].ans_1;
    localStorage.setItem('ans_4_1', JSON.stringify(ans_1));
    var ans_2 = list_question[4].ans_2;
    localStorage.setItem('ans_4_2', JSON.stringify(ans_2));
    var ans_3 = list_question[4].ans_3;
    localStorage.setItem('ans_4_3', JSON.stringify(ans_3));
    var ans_4 = list_question[4].ans_4;
    localStorage.setItem('ans_4_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[5].ans_1;
    localStorage.setItem('ans_5_1', JSON.stringify(ans_1));
    var ans_2 = list_question[5].ans_2;
    localStorage.setItem('ans_5_2', JSON.stringify(ans_2));
    var ans_3 = list_question[5].ans_3;
    localStorage.setItem('ans_5_3', JSON.stringify(ans_3));
    var ans_4 = list_question[5].ans_4;
    localStorage.setItem('ans_5_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[6].ans_1;
    localStorage.setItem('ans_6_1', JSON.stringify(ans_1));
    var ans_2 = list_question[6].ans_2;
    localStorage.setItem('ans_6_2', JSON.stringify(ans_2));
    var ans_3 = list_question[6].ans_3;
    localStorage.setItem('ans_6_3', JSON.stringify(ans_3));
    var ans_4 = list_question[6].ans_4;
    localStorage.setItem('ans_6_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[7].ans_1;
    localStorage.setItem('ans_7_1', JSON.stringify(ans_1));
    var ans_2 = list_question[7].ans_2;
    localStorage.setItem('ans_7_2', JSON.stringify(ans_2));
    var ans_3 = list_question[7].ans_3;
    localStorage.setItem('ans_7_3', JSON.stringify(ans_3));
    var ans_4 = list_question[7].ans_4;
    localStorage.setItem('ans_7_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[8].ans_1;
    localStorage.setItem('ans_8_1', JSON.stringify(ans_1));
    var ans_2 = list_question[8].ans_2;
    localStorage.setItem('ans_8_2', JSON.stringify(ans_2));
    var ans_3 = list_question[8].ans_3;
    localStorage.setItem('ans_8_3', JSON.stringify(ans_3));
    var ans_4 = list_question[8].ans_4;
    localStorage.setItem('ans_8_4', JSON.stringify(ans_4));

    // ANSWER
    var ans_1 = list_question[9].ans_1;
    localStorage.setItem('ans_9_1', JSON.stringify(ans_1));
    var ans_2 = list_question[9].ans_2;
    localStorage.setItem('ans_9_2', JSON.stringify(ans_2));
    var ans_3 = list_question[9].ans_3;
    localStorage.setItem('ans_9_3', JSON.stringify(ans_3));
    var ans_4 = list_question[9].ans_4;
    localStorage.setItem('ans_9_4', JSON.stringify(ans_4));

  }
});

var retrievedObject = localStorage.getItem('round_code');
var retrievedUser = localStorage.getItem('user_game_id');

JSON.parse(retrievedObject);
var obj = JSON.parse(retrievedUser);

// Remove double quotes from a String
var strRoundCode = retrievedObject;
const user_game = obj.user_game_id;
// console.log(user_game);

const roundCode = strRoundCode.replace(/^"(.*)"$/, '$1');
// console.log(roundCode);

xhr.open("GET", "https://api.purinaroadshow.rockinevent.com/api/user/question/get/" + roundCode);
xhr.setRequestHeader("Authorization", "Bearer " + user_game);

xhr.send();

// Retrieve the question object from storage
var question_1 = localStorage.getItem('question_1');
var obj1 = JSON.parse(question_1);
const quest_1 = obj1.question;
const quest_id_0 = obj1.question_id;

var question_2 = localStorage.getItem('question_2');
var obj2 = JSON.parse(question_2);
const quest_2 = obj2.question;
const quest_id_1 = obj2.question_id;

var question_3 = localStorage.getItem('question_3');
var obj3 = JSON.parse(question_3);
const quest_3 = obj3.question;
const quest_id_2 = obj3.question_id;

var question_4 = localStorage.getItem('question_4');
var obj4 = JSON.parse(question_4);
const quest_4 = obj4.question;
const quest_id_3 = obj4.question_id;

var question_5 = localStorage.getItem('question_5');
var obj5 = JSON.parse(question_5);
const quest_5 = obj5.question;
const quest_id_4 = obj5.question_id;

var question_6 = localStorage.getItem('question_6');
var obj6 = JSON.parse(question_6);
const quest_6 = obj6.question;
const quest_id_5 = obj6.question_id;

var question_7 = localStorage.getItem('question_7');
var obj7 = JSON.parse(question_7);
const quest_7 = obj7.question;
const quest_id_6 = obj7.question_id;

var question_8 = localStorage.getItem('question_8');
var obj8 = JSON.parse(question_8);
const quest_8 = obj8.question;
const quest_id_7 = obj8.question_id;

var question_9 = localStorage.getItem('question_9');
var obj9 = JSON.parse(question_9);
const quest_9 = obj9.question;
const quest_id_8 = obj9.question_id;

var question_10 = localStorage.getItem('question_10');
var obj10 = JSON.parse(question_10);
const quest_10 = obj10.question;
const quest_id_9 = obj10.question_id;

// Retrieve the answer object from storage
var ans_0_1 = localStorage.getItem('ans_0_1');
var ans_0_2 = localStorage.getItem('ans_0_2');
var ans_0_3 = localStorage.getItem('ans_0_3');
var ans_0_4 = localStorage.getItem('ans_0_4');

// Retrieve the answer object from storage
var ans_1_1 = localStorage.getItem('ans_1_1');
var ans_1_2 = localStorage.getItem('ans_1_2');
var ans_1_3 = localStorage.getItem('ans_1_3');
var ans_1_4 = localStorage.getItem('ans_1_4');

// Retrieve the answer object from storage
var ans_2_1 = localStorage.getItem('ans_2_1');
var ans_2_2 = localStorage.getItem('ans_2_2');
var ans_2_3 = localStorage.getItem('ans_2_3');
var ans_2_4 = localStorage.getItem('ans_2_4');

// Retrieve the answer object from storage
var ans_3_1 = localStorage.getItem('ans_3_1');
var ans_3_2 = localStorage.getItem('ans_3_2');
var ans_3_3 = localStorage.getItem('ans_3_3');
var ans_3_4 = localStorage.getItem('ans_3_4');

// Retrieve the answer object from storage
var ans_4_1 = localStorage.getItem('ans_4_1');
var ans_4_2 = localStorage.getItem('ans_4_2');
var ans_4_3 = localStorage.getItem('ans_4_3');
var ans_4_4 = localStorage.getItem('ans_4_4');

// Retrieve the answer object from storage
var ans_5_1 = localStorage.getItem('ans_5_1');
var ans_5_2 = localStorage.getItem('ans_5_2');
var ans_5_3 = localStorage.getItem('ans_5_3');
var ans_5_4 = localStorage.getItem('ans_5_4');

// Retrieve the answer object from storage
var ans_6_1 = localStorage.getItem('ans_6_1');
var ans_6_2 = localStorage.getItem('ans_6_2');
var ans_6_3 = localStorage.getItem('ans_6_3');
var ans_6_4 = localStorage.getItem('ans_6_4');

// Retrieve the answer object from storage
var ans_7_1 = localStorage.getItem('ans_7_1');
var ans_7_2 = localStorage.getItem('ans_7_2');
var ans_7_3 = localStorage.getItem('ans_7_3');
var ans_7_4 = localStorage.getItem('ans_7_4');

// Retrieve the answer object from storage
var ans_8_1 = localStorage.getItem('ans_8_1');
var ans_8_2 = localStorage.getItem('ans_8_2');
var ans_8_3 = localStorage.getItem('ans_8_3');
var ans_8_4 = localStorage.getItem('ans_8_4');

// Retrieve the answer object from storage
var ans_9_1 = localStorage.getItem('ans_9_1');
var ans_9_2 = localStorage.getItem('ans_9_2');
var ans_9_3 = localStorage.getItem('ans_9_3');
var ans_9_4 = localStorage.getItem('ans_9_4');

// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: quest_1,
    answer: "O1",
    options: [
      1 + ans_0_1,
      2 + ans_0_2,
      3 + ans_0_3,
      4 + ans_0_4
    ]
  },
  {
    numb: 2,
    question: quest_2,
    answer: "O1",
    options: [
      1 + ans_1_1,
      2 + ans_1_2,
      3 + ans_1_3,
      4 + ans_1_4
    ]
  },
  {
    numb: 3,
    question: quest_3,
    answer: "O1",
    options: [
      1 + ans_2_1,
      2 + ans_2_2,
      3 + ans_2_3,
      4 + ans_2_4
    ]
  },
  {
    numb: 4,
    question: quest_4,
    answer: "O1",
    options: [
      1 + ans_3_1,
      2 + ans_3_2,
      3 + ans_3_3,
      4 + ans_3_4
    ]
  },
  {
    numb: 5,
    question: quest_5,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_4_1,
      2 + ans_4_2,
      3 + ans_4_3,
      4 + ans_4_4
    ]
  },
  {
    numb: 6,
    question: quest_6,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_5_1,
      2 + ans_5_2,
      3 + ans_5_3,
      4 + ans_5_4
    ]
  },
  {
    numb: 7,
    question: quest_7,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_6_1,
      2 + ans_6_2,
      3 + ans_6_3,
      4 + ans_6_4
    ]
  },
  {
    numb: 8,
    question: quest_8,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_7_1,
      2 + ans_7_2,
      3 + ans_7_3,
      4 + ans_7_4
    ]
  },
  {
    numb: 9,
    question: quest_9,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_8_1,
      2 + ans_8_2,
      3 + ans_8_3,
      4 + ans_8_4
    ]
  },
  {
    numb: 10,
    question: quest_10,
    answer: "eXtensible Markup Language",
    options: [
      1 + ans_9_1,
      2 + ans_9_2,
      3 + ans_9_3,
      4 + ans_9_4
    ]
  }
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked

  info_box.classList.add("activeInfo"); //show info box


// if exitQuiz button clicked
// exit_btn.onclick = () => {
//   location.href = "login.html";
// }

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(30); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
}

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
// restart_quiz.onclick = ()=>{
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     result_box.classList.remove("activeResult"); //hide result box
//     timeValue = 30; 
//     que_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuetions(que_count); //calling showQestions function
//     queCounter(que_numb); //passing que_numb value to queCounter
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine); //clear counterLine
//     startTimer(timeValue); //calling startTimer function
//     startTimerLine(widthValue); //calling startTimerLine function
//     timeText.textContent = "Time"; //change the text of timeText to Time Left
//     next_btn.classList.remove("show"); //hide the next button
// }

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

const skip_btn = document.querySelector(".skip");
// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) { //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
}

skip_btn.onclick = () => {
  if (que_count < questions.length - 1) { //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
}

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
  let option_tag = '<div class="option" style="background-color: #EC7A34;"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option" style="background-color: #59B4AE;"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option" style="background-color: #F3AAB6;"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option" style="background-color: #75B44D;"><span>' + questions[index].options[3] + '</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option

  const strUserAns = userAns.substring(0, 1);
  var numUserAns = [];
  numUserAns = parseInt(strUserAns);

  var json = JSON.stringify(list_answer);
  localStorage.setItem('list_answer', json);

  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    userScore += 10; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
    document.getElementById("next").click(); //next
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    // console.log("Wrong Answer");

    // for(i=0; i < allOptions; i++){
    //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
    //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //         console.log("Auto selected correct answer.");
    //     }
    // }
    document.getElementById("next").click(); //next 
  }
  // for(i=0; i < allOptions; i++){
  //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  // }
  // next_btn.classList.add("show"); //show the next button if user selected any option


  let scorepoint = document.getElementById("scorepoint");
  scorepoint.innerHTML = '<p>' + userScore + '</p>';             //score show
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) { // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
  }
  else if (userScore > 1) { // if user scored more than 1
    let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag;
  }
  else { // if user scored less than 1
    let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag;
  }
}



function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) { //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) { //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      document.getElementById("skip").click(); //skip 
      // for(i=0; i < allOptions; i++){
      //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      // }
      // next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    // time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) { //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}





// auto click start


document.getElementById("startquiz").click();



// not reload

document.onkeydown = function (e) {
  e = e || window.event;
  ///prevent F5 refresh page
  if (e.keyCode === 116) {
    e.keyCode = 0;
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    return false;
  }

  switch (event.keyCode) {
    case 116: //F5 button
      event.returnValue = false;
      event.keyCode = 0;
      return false;
    case 82: //R button
      if (event.ctrlKey) {
        event.returnValue = false;
        event.keyCode = 0;
        return false;
      }
  }
}

// Not click

function disableselect(e) {
  return false
}
function reEnable() {
  return true
}
//if IE4+
document.onselectstart = new Function("return false")
//if NS6
if (window.sidebar) {
  document.onmousedown = disableselect
  document.onclick = reEnable
}

var message = "Do not click right..!!";

function clickIE() { if (document.all) { } }
function clickNS(e) {
  if
    (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) { }
  }
}
if (document.layers) { document.captureEvents(Event.MOUSEDOWN); document.onmousedown = clickNS; }
else { document.onmouseup = clickNS; document.oncontextmenu = clickIE; }
document.oncontextmenu = new Function("return false")

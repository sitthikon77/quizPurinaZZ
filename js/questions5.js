const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const info_box = document.querySelector(".info_box");
const skip_btn = document.querySelector(".skip");

let questions = [];
// creating the new div tags which for icons
const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag =
  '<div class="icon cross"><i class="fas fa-times"></i></div>';

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let pause = 0;

let timeRemainSec = 0;

var retrievedObject = localStorage.getItem("round_code");
var retrievedUser = localStorage.getItem("user_game_id");

JSON.parse(retrievedObject);
var obj = JSON.parse(retrievedUser);

// Remove double quotes from a String
var strRoundCode = retrievedObject;
const user_game = obj.user_game_id;
// console.log(user_game);

const roundCode = strRoundCode.replace(/^"(.*)"$/, "$1");
// console.log(roundCode);


let collectAnswer = { round_code:'' , list_answer:[] }

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
if (this.readyState === 4) {
    // console.log(this.responseText);

    var myQUIZ = this.responseText;

    var objQUIZ = JSON.parse(myQUIZ);
    console.log(objQUIZ);

    collectAnswer.round_code = roundCode
    afterloaded(objQUIZ);

    pause = 1;
  }
});

function intervalClick() {
  if (pause != 1) {
  //start_id = document.getElementById("start_id")
  //start_id.click();
  sendGetQuestionData();
}
}


setInterval(intervalClick, 2000);

const continue_btn = document.querySelector(".info_box .buttons .restart");

continue_btn.onclick = () => {
  sendGetQuestionData();
};

function sendGetQuestionData()
{
  xhr.open(
    "GET",
    "https://api.purinaroadshow.rockinevent.com/api/user/question/get/" +
      roundCode
  );
  xhr.setRequestHeader("Authorization", "Bearer " + user_game);
  xhr.send();
}

function afterloaded(objQUIZ) {
  
  timeValue = parseInt(objQUIZ.timeout_sec);
  questions = []
  for (let indexInitQuestion = 0; indexInitQuestion < objQUIZ.list_question.length; indexInitQuestion++)
  {
    let quest = objQUIZ.list_question[indexInitQuestion]
    let itemQuestion =  {
      numb: quest.no,
      question_id: quest.question_id,
      question: quest.question,
      answer: "--",
      options: [quest.ans_1,  quest.ans_2, quest.ans_3, quest.ans_4],
    }

    questions.push(itemQuestion)
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //selecting all required elements

  // if startQuiz button clicked

  // if exitQuiz button clicked
  // exit_btn.onclick = () => {
  //   location.href = "login.html";
  // }

  // if continueQuiz button clicked

  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(timeValue); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function

  //const restart_quiz = result_box.querySelector(".buttons .restart");
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
  };

  
  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      //if question count is less than total question length
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

      // =============================================== ส่งค่า ============================================= //

      var data = JSON.stringify(
        collectAnswer
      );

      var reSend = new XMLHttpRequest();
      reSend.withCredentials = true;

      reSend.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
        //  alert('ส่งเเล้ว')
          location.href = "result-score.html"; 
          console.log(this.responseText);
        }
      });

      reSend.open("POST", "https://api.purinaroadshow.rockinevent.com/api/user/question/answer/submit");
      reSend.setRequestHeader("Authorization", "Bearer " + user_game);
      reSend.setRequestHeader("Content-Type", "application/json");
      reSend.send(data);

      // =============================================== ส่งค่า ============================================= //

      
     
    }
  };

  skip_btn.onclick = () => {
    optionSelected(skip_btn,true)
  };
}

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");
  

  skip_btn.dataset.questionid = questions[index].question_id
  skip_btn.dataset.ans = 0
  
  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    `<div class="option" style="background-color: #EC7A34; font-size: 1.3rem;" data-questionid="${questions[index].question_id}" data-ans="1"><span>` +
    questions[index].options[0] +
    "</span></div>" +
    `<div class="option" style="background-color: #59B4AE; font-size: 1.3rem;" data-questionid="${questions[index].question_id}" data-ans="2"><span>` +
    questions[index].options[1] +
    "</span></div>" +
    `<div class="option" style="background-color: #F3AAB6; font-size: 1.3rem;" data-questionid="${questions[index].question_id}" data-ans="3"><span>` +
    questions[index].options[2] +
    "</span></div>" +
    `<div class="option" style="background-color: #75B44D; font-size: 1.3rem;" data-questionid="${questions[index].question_id}" data-ans="4"><span>` +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this, false)");
  }
}

//if user clicked on option
function optionSelected(answer, isSkip) {

  console.log('my answer')
  console.log(answer.dataset.questionid)
  console.log(answer.dataset.ans)
  
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine

  //////////   เก็บคำตอบตรงนี้  ////////
  const objAnswer = {
      question_id: answer.dataset.questionid,
      answer_number: answer.dataset.ans,
      is_skip: isSkip,
      used_time_sec: timeValue - parseFloat(timeRemainSec)
    };
  collectAnswer.list_answer.push(objAnswer)

// console.log(JSON.stringify(collectAnswer))

  ///////////////////////////////////
  document.getElementById("next").click(); //next
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! 🎉, You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice 😎, You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>and sorry 😐, You got only <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  timeRemainSec = time
  timeCount.textContent = timeRemainSec;
  counter = setInterval(timer, 1000);
  function timer() {
    timeRemainSec--;
    timeCount.textContent = timeRemainSec; //changing the value of timeCount with time value
    if (timeRemainSec <= 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (timeRemainSec <= 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time"; //change the time text to time off
    
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
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}

// auto click start

// not reload

document.onkeydown = function (e) {
  e = e || window.event;
  ///prevent F5 refresh page
  if (e.keyCode === 116) {
    e.keyCode = 0;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
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
};

// Not click

function disableselect(e) {
  return false;
}
function reEnable() {
  return true;
}
//if IE4+
document.onselectstart = new Function("return false");
//if NS6
if (window.sidebar) {
  document.onmousedown = disableselect;
  document.onclick = reEnable;
}

var message = "Do not click right..!!";

function clickIE() {
  if (document.all) {
  }
}
function clickNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS;
} else {
  document.onmouseup = clickNS;
  document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");

'use strict';

let visitorName = prompt('Welcome to my About Me page. Please enter your name for a more personalized experience');
alert('Welcome ' + visitorName + ' to my About Me page. I want to make this fun and interactive.\n\nPlease read and memorize the facts about myself below. You will be given a short quiz right after!\n\n- My name is David Tusia\n- I am 31 years old\n- I grew up in Connecticut\n- I have two German Shepherds named Luna and Nyx\n- I love playing video games\n- I drive a Chevy Cobalt');
let counter = 0;
let messageAttempts = 'Attempts Remaining: ';

function quiz1() {
  let questions = ['Did I grow up in Washington State?', 'Were my dogs both German Shepherds?', 'Do I hate video games?', 'Is the brand of car I drive a Chevy?', 'Am I older than 25?'];
  let answers = ['n', 'y', 'n', 'y', 'y'];
  let visitorAnswerQ1;
  for (let i = 0; i < questions.length && answers.length; i++) {
    visitorAnswerQ1 = prompt(questions[i]).toLowerCase().trim();
    console.log(visitorAnswerQ1);
    if (visitorAnswerQ1 === null) {
      break;
    }
    if (visitorAnswerQ1 === 'yes') {
      visitorAnswerQ1 = 'y';
    }
    if (visitorAnswerQ1 === 'no') {
      visitorAnswerQ1 = 'n';
    }
    if (false === answers.includes(visitorAnswerQ1)) {
      alert('Please enter a valid entry');
      i--;
    }
    else if (visitorAnswerQ1 === answers[i]) {
      alert('You did it!');
      counter++;
    }
    else {
      alert('Incorrect!');
    }
  }
}

quiz1();
alert('Let us see how you are doing so far...\n' + counter + ' / 7 questions correct so far. Keep up the good work!');
alert('Time to play a little guessing game...');

function quiz2() {
  let visitorAnswerQ2 = 0;
  let higherOrLower = '';
  let guessesRemainingQ2 = 4;
  let possibleAnswers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let myNumber = Math.ceil(Math.random() * 10);
  while (guessesRemainingQ2) {
    visitorAnswerQ2;
    visitorAnswerQ2 = parseInt(prompt(`${messageAttempts} ${guessesRemainingQ2}\n${higherOrLower}\n\nGuess a number between 1 - 10: `), 10);
    if (visitorAnswerQ2 === null) {
      break;
    }
    if (false === possibleAnswers.includes(visitorAnswerQ2)) {
      alert('Please enter a valid entry');
    }
    else if (visitorAnswerQ2 === myNumber) {
      alert('You did it!');
      counter++;
      break;
    }
    else {
      guessesRemainingQ2--;
      alert('Incorrect!');
    }
    if (false === possibleAnswers.includes(visitorAnswerQ2)) {
      console.log('null');
    }
    else if (visitorAnswerQ2 > myNumber) {
      higherOrLower = 'You guessed: ' + visitorAnswerQ2 + ' The number is Lower!';
    }
    else {
      higherOrLower = 'You guessed: ' + visitorAnswerQ2 + ' The number is Higher!';
    }
    if (guessesRemainingQ2 === 0) {
      return alert('Oh no, you ran out of attempts! The number was: ' + myNumber);
    }
  }
}

quiz2();
alert('So far you have a total of ' + counter + ' /7 questions correct. Keep going!');
alert('Hmmm, lets make this a little bit tougher... do you like Geography?');

function quiz3() {
  let visitorAnswerQ3;
  let guessesRemainingQ3 = 6;
  let states = ['nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota'];
  let questions = ['Name a state that starts with the letter N: '];
  while (guessesRemainingQ3) {
    for (let i = 0; i < states.length; i++) {
      visitorAnswerQ3 = prompt(`${messageAttempts} ${guessesRemainingQ3}\n\n${questions[0]}`).toLowerCase().trim();
      if (visitorAnswerQ3 === null) {
        break;
      }
      if (true === states.includes(visitorAnswerQ3)) {
        alert('You did it!');
        counter++;
        return guessesRemainingQ3 === 0;
      }
      if (visitorAnswerQ3 === '') {
        alert('Please enter a valid entry');
      }
      else if (visitorAnswerQ3 !== states.includes(visitorAnswerQ3)) {
        alert('Incorrect!');
        guessesRemainingQ3--;
      }
      if (guessesRemainingQ3 === 0) {
        return alert(`Oh no, you ran out of attempts! The states that you could've chosen were: \n\n${states}`);
      }
    }
  }
}

quiz3();
alert('You really are good at this, just look at your score ' + counter + ' /7! That is incredible!\n\nWell until I make more games, please enjoy the rest of my website ' + visitorName + '!');

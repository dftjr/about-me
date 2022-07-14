'use strict';

let visitorName = prompt('Welcome to my About Me page. Please enter your name for a more personalized experience');

alert('Welcome ' + visitorName + ' to my About Me page. I want to make this fun and interactive.\n\nPlease read and memorize the facts about myself below. You will be given a short quiz right after!\n\n- My name is David Tusia\n- I am 31 years old\n- I grew up in Connecticut\n- I have two German Shepherds named Luna and Nyx\n- I love playing video games\n- I drive a Chevy Cobalt');

//this is to keep count of the correctly answered questions. counter++ adds 1 to the starting value/current value.
let counter = 0;

//.toLowerCase() makes all entries lower case, .trim() takes away any spaces before and after the value submitted to the prompt
let homeState = prompt('Did I grow up in Washington State?\n(Please enter: y/n or yes/no)').toLowerCase().trim();

if (homeState === 'no' || homeState === 'n') {
  //console.log('Input: ' + homeState + ' Output: Correct!');
  alert('Correct!');
  counter++;
} else if (homeState) {
  //console.log('Input: ' + homeState + ' Output: Incorrect!');
  alert('Incorrect... I mean, it was a 50/50 shot right?');
}

let myPet = prompt('Were my dogs both German Shepherds?\n(Please enter: y/n or yes/no)').toLowerCase().trim();

if (myPet ==='yes' || myPet ==='y') {
  //console.log('Input: ' + myPet + ' Output: Correct!');
  alert('Correct!');
  counter++;
} else if (myPet === 'no' || myPet ==='n') {
  //console.log('Input: ' + mypet + ' Output: Incorrect!');
  alert('Incorrect... I let them know you called them poodles, they are not thrilled!');
} else {
  alert('I do not recognize that entry, we can move on.');
}

let myHobby = prompt('Do I hate video games?\n(Please enter: y/n or yes/no)').toLowerCase().trim();

if (myHobby === 'no' || myHobby === 'n') {
  //console.log('Input: ' + myHobby + ' Output: Correct!');
  alert('Correct!');
  counter++;
} else if (myHobby === 'yes' || myHobby ==='y') {
  //console.log('Input: ' + myHobby + ' Output: Incorrect!');
  alert('Incorrect... I will forever love them!');
} else {
  alert('I do not recognize that entry, we can move on.');
}

let anyCar = prompt('Is the brand of car I drive a Chevy?\n(Please enter: y/n or yes/no)').toLowerCase().trim();

if (anyCar === 'yes' || anyCar === 'y') {
  //console.log('Input: ' + anyCar + ' Output: Correct!');
  alert('Correct!');
  counter++;
} else if (anyCar === 'no' || anyCar ==='n') {
  //console.log('Input: ' + anyCar + ' Output: Incorrect!');
  alert('Incorrect... you must be a Ford fan.');
} else {
  alert('I do not recognize that entry, we can move on.');
}

let myAge = prompt('Am I older than 25?\n(Please enter: y/n or yes/no)').toLowerCase().trim();

if (myAge === 'yes' || myAge === 'y') {
  //console.log('Input: ' + myAge + ' Output: Correct!');
  alert('Correct!');
  counter++;
} else if (myAge === 'no' || myAge ==='n') {
  //console.log('Input: ' + myAge + ' Output: Incorrect!');
  alert('Incorrect... but I do appreciate the compliment.');
} else {
  alert('I do not recognize that entry, we can move on.');
}

alert('Let us see how you are doing so far...\n' + counter + ' / 7 questions correct so far. Keep up the good work!');
alert('Time to play a little guessing game...');

let guessesNumber = 4;
let myNumber = Math.ceil(Math.random() * 10);
let visitorNumber;

while (guessesNumber) {
  if (visitorNumber === undefined) {
    visitorNumber = parseInt(prompt(`Attempts Remaining: ${guessesNumber}\n\nGuess the number on my mind, it is between 1-10:`, '0'), 10);
    guessesNumber--;
  }
  if (visitorNumber === myNumber) {
    // console.log('You did it!');
    alert('You did it!');
    counter++;
    break;
  }
  if (visitorNumber === 0 || null) {
    alert('I do not recognize that entry, we can move on.');
    break;
  }
  if (visitorNumber < myNumber) {
    // console.log('Hint: Higher');
    visitorNumber = parseInt(prompt(`Attempts Remaining: ${guessesNumber}\n\nNot quite, you entered: ` + visitorNumber `\nhere is a hint: Higher\n\n Guess a number:`, '0'), 10);
    guessesNumber--;
  }
  if (visitorNumber > myNumber){
    // console.log('Hint: Lower');
    visitorNumber = parseInt(prompt(`Attempts Remaining: ${guessesNumber}\n\nNot quite, you entered: ` + visitorNumber `\nhere is a hint: Lower\n\n Guess a number`, '0'), 10);
    guessesNumber--;
  }
}

if (guessesNumber === 0) {
  // console.log('Sorry, no more trys left');
  alert('Sorry, no more trys left!\nThe number was: ' + myNumber);
}

alert('So far you have a total of ' + counter + ' /7 questions correct. Keep going!');
alert('Hmmm, lets make this a little bit tougher... do you like Geography?');

let visitorAnswer = '';
let i;
let guessesArray = 6;

const states = ['nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota'];

do {
  visitorAnswer = prompt(`Attempts Remaining: ${guessesArray}\n\nEnter US State that begins with the letter N:`).toLowerCase().trim();
  for (i = 0; i < states.length; i++) {
    if (states[i] === visitorAnswer) {
      alert('Good Job!\n\nHere is a list of all the states that would have been accepted as well:\n\n' + states);
      counter++;
      break;
    }
  }
  if (visitorAnswer === states[i]) {
    break;
  }
  guessesArray--;
}
while (guessesArray);

if (guessesArray === 0) {
  alert('Sorry, you have used up all your attempts. That is going to hurt the leaderboards!');
}

alert('You really are good at this, just look at your score ' + counter + ' /7! That is incredible!\n\nWell until I make more games, please enjoy the rest of my website ' + visitorName + '!');

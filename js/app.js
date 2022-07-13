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
} else if (homeState === 'yes' || homeState ==='y') {
  //console.log('Input: ' + homeState + ' Output: Incorrect!');
  alert('Incorrect... I mean, it was a 50/50 shot right?');
} else {
  alert('I do not recognize that entry, we can move on.');
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
} else if (myHobby === 'no' || myHobby ==='n') {
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

alert('Lets see how you did...\n' + counter + ' / 5 correct!\n\nSee, that was fun right?! Please enjoy the rest of the site ' + visitorName + '!');

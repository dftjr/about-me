'use strict';


let visitorName = prompt('Welcome to my About Me page. Please enter your name for a more personalized experience');

alert('Welcome ' + visitorName + ' to my About Me page. I want to make this fun and interactive.\n\nPlease read and memorize the facts about myself below. You will be given a short quiz right after!\n\n- My name is David Tusia\n- I am 31 years old\n- I grew up in Connecticut\n- I have two German Shepherds named Luna and Nyx\n- I love playing video games\n- I drive a Chevy Cobalt');

let homeState = prompt('Did I grow up in Washington State?\n(Please enter y/n or yes/no)').toLowerCase().trim();

if (homeState === 'no' || homeState === 'n') {
  alert('Correct!');
} else if (homeState) {
  alert('Incorrect... I mean, it was a 50/50 shot right?');
}

let myPet = prompt('Were my dogs both German Shepherds?\n(Please enter y/n or yes/no)').toLowerCase().trim();

if (myPet ==='yes' || myPet ==='y') {
  alert('Correct!');
} else if (myPet) {
  alert('Incorrect... I let them know you called them poodles, they are not thrilled!');
}

let myHobby = prompt('Do I hate video games?\n(Please enter y/n or yes/no)').toLowerCase().trim();

if (myHobby === 'no' || myHobby === 'n') {
  alert('Correct!');
} else if (myHobby) {
  alert('Incorrect... I will forever love them!');
}

let anyCar = prompt('Is the brand of car I drive a Chevy?\n(Please enter y/n or yes/no)').toLowerCase().trim();

if (anyCar === 'yes' || anyCar === 'y') {
  alert('Correct!');
} else if (anyCar) {
  alert('Incorrect... you must be a Ford fan.');
}

let myAge = prompt('Am I older than 25?\n(Please enter y/n or yes/no)').toLowerCase().trim();

if (myAge === 'yes' || myAge === 'y') {
  alert('Correct!');
} else if (myAge) {
  alert('Incorrect... but I do appreciate the compliment.');
}

alert('See, that was fun right?! Please enjoy the rest of the site ' + visitorName + '!');

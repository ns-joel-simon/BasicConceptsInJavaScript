// // if Statement

// let Age = 20;
// if (Age >= 18) {
//   console.log('You are an adult.');
// } else {
//   console.log('You are a minor.');
// }

// else if Statement

let Age = 25;
if (Age < 18) {
  console.log('You are a minor.');
} else if (Age >= 18 && Age <= 65) {
  console.log('You are an adult.');
} else {
  console.log('You are a senior.');
}

// else Statement
let day = 'Monday';
if (day === 'Saturday' || day === 'Sunday') {
  console.log('It\'s the weekend!');
} else {
  console.log('It\'s a weekday.');
}

let bob_age = 35
let can_vote = (bob_age>=18)? 'yes': 'no'
console.log(can_vote)

let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('Yellow fruit');
    break;
  case 'apple':
    console.log('Red or green fruit');
    break;
  case 'orange':
    console.log('Orange fruit');
    break;
  default:
    console.log('Unknown fruit');
}


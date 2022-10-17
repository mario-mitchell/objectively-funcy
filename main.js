// Your code here.

// Your code here.


/*
getFirstName()
parameters: 1 = object
{
  firstName:'string',
  lastName: 'string'
}
return firstName
*/

function getFirstName(person) {
  return person.firstName
}

console.log(getFirstName({ firstName: 'Nathalie', lastName: 'Mitchell' })) // -> 'Colin'
console.log(getFirstName({ firstName: 'Mario', lastName: 'Mitchell' })) // -> 'Petra'
////////////////////////////////////////////////////////////////////////////////
//  2. getLastName

function getLastName(person) {

  return person.lastName;
}

console.log(getLastName({ firstName: 'Mario', lastName: 'Mitchell' })) 
console.log(getLastName({ firstName: 'Nathalie', lastName: 'Mitchell' }))
/////////////////////////////////////////////////////////////////////////////////////
// 3. getFullName

function getFullName(person) {

  return `${person.firstName} ${person.lastName}`
}
console.log(getFullName({ firstName: 'Mario', lastName: 'Mitchell' }))
console.log(getFullName({ firstName: 'Nathalie', lastName: 'Mitchell' }))
////////////////////////////////////////////////////////////////////////////////
// 4. 

parameters: 2
/*1st parameters
person = {
  firstName:'string',
  lastName: 'string'
}
newFirstName : "string"
*/change firstName of person object to newFirstName


function setFirstName(person, newFirstName) {
  //person['firstName'] = newFirstName;
  person.firstName = newFirstName;
}

let person1 = { firstName: 'Nathalie', lastName: 'Mitchell' };
let person2 = { firstName: 'Bryden', lastName: 'Mitchell' };

setFirstName(person1, 'Mario');
setFirstName(person2, 'Lester');

console.log(person1);
console.log(person2);
// 5. setAge

let person3 = { firstName: 'Nathalie', lastName: 'Mitchell', age: 31 }
let person4 = { firstName: 'Bryden', lastName: 'Mitchell', age: 8 }

function setAge(person, ageChange) {
  person.age = ageChange;
}
setAge(person3, 35)
setAge(person4, 15)

console.log(person3);
console.log(person4);

//6. giveBirthday
let persons1 = {
  firstName: 'Nathalie',
  lastName: 'Mitchell',
  age: 31
}
let persons2 = {
  firstName: 'Bryden',
  lastName: 'Mitchell',
  age: 8
}
let persons3 = {
  firstName: 'Mario',
  lastName: 'Mitchell',
  age: 31
}

function giveBirthday(persons) {
  if (persons.age === undefined) {
    persons.age = 1;
  } else persons.age += 1
  return persons
}
giveBirthday(persons1)
giveBirthday(persons2)
giveBirthday(persons3)

//7. marry
const persons4 = { firstName: 'Jake', lastName: 'The Human', married: false }
const persons5 = { firstName: 'Princess', lastName: 'BubbleGum', married: false }
function marry(persons4, persons5) {
  persons4.married = true;
  persons5.married = true;

  persons4.spouseName = `${persons5.firstName} ${persons5.lastName}`
  persons5.spouseName = `${persons4.firstName} ${persons4.lastName}`
}
console.log(marry(persons4, persons5))

//8. divorce
const person6 = { firstName: 'Jake', lastName: 'The Human', married: false }
const person7 = { firstName: 'Princess', lastName: 'BubbleGum', married: false }
function divorce(person6, person7) {
  person6.married = false;
  person7.married = false;

  delete person6.spouseName
  delete person7.spouseName
}
divorce(person6, person7)



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

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
change firstName of person object to newFirstName*/


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

// GIVE BIRTHDAY
console.log("\n Give Birthday");
function giveBirthday(person){
	if (person.age === undefined){
		person.age = 1;
	}else{
		person.age++;
	}
}
let homie1 = {firstName: 'Bryden', lastName: 'Mitchell', age: 8};
let homie2 = {firstName: 'Nathalie', lastName: 'Mitchell', age: 31};
let homie3 = {firstName: 'Mario', lastName: 'Mitchell'}
giveBirthday(homie1);
giveBirthday(homie2);
giveBirthday(homie3);
console.log(homie1);
console.log(homie2);
console.log(homie3);


// MARRY
console.log("\n Marry");
function marry(marry1, marry2){
	if (marry1.married === false && marry2.married === false){
		marry1.married = true;
		marry2.married = true;
	}
	if (marry1.spouseName === undefined){
		marry1.spouseName = `${marry2.firstName} ${marry2.lastName}`
	}
	if (marry2.spouseName === undefined){
		marry2.spouseName = `${marry1.firstName} ${marry1.lastName}`
	}
}
let marry1 = {firstName: 'Jake', lastName: 'The Human', married: false}
let marry2 = {firstName: 'Princess', lastName: 'BubbleGum', married: false}
marry(marry1, marry2)
console.log(marry1) 
console.log(marry2) 


// DIVORCE
console.log("\n Divorce");
function divorce(div1, div2){
	if (div1.married === true && div2.married === true){
		div1.married = false;
		div2.married = false;
	}
	delete div1.spouseName;
	delete div2.spouseName;
}
const div1 = {firstName: 'Jake', lastName: 'The Human', married: true, spouseName: 'Petra Solano'}
const div2 = {firstName: 'Princess', lastName: 'BubbleGum', married: true, spouseName: 'Colin Jaffe'}
divorce(div1, div2);
console.log(div1)  
console.log(div2) 



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

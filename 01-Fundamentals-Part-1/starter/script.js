/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let threeYears = 3;

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myCurrentJob);

let country = 'US';
let continent = 'North America';
let population = 300000000;

const ISISLAND = false;
let language = 'English';

//ISISLAND = true;

console.log ("country: " + country + ", continent: " + continent + ", population: " + population + ", ISISLAND: " + ISISLAND + ", language: " + language);



let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // should return null, but it returns object


let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

let lastName = 'Lostumbo';
console.log(lastName);

const now = 2037;
const ageAlex = now - 1991;
const ageSarah = now - 2018;
console.log(ageAlex, ageSarah);

// math operators
console.log(ageAlex * 2, ageAlex / 10, 2 ** 3);
// 2 ** 3 = 2 to the power of 3 = 2*2*2 = 8

const firstName = 'Alex';
const lastName = 'Lostumbo';
console.log(firstName+' '+lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 (=25)
x *= 4; // x = x*4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x+1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageAlex > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); // order of operators precedance: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;


console.log(25-10-5);
let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// Coding Challenge 1:

const markMass1 = 78, johnMass1 = 92, markHeight1 = 1.69, johnHeight1 = 1.95;
const markMass2 = 95, johnMass2 = 85, markHeight2 = 1.88, johnHeight2 = 1.76;

const markBMI1 = markMass1 / markHeight1**2;
const markBMI2 = markMass2 / markHeight2**2;
const johnBMI1 = johnMass1 / johnHeight1**2;
const johnBMI2 = johnMass2 / johnHeight2**2;

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI1, markBMI2, johnBMI1, johnBMI2);
console.log(markHigherBMI1, markHigherBMI2);


const firstName = 'Alex';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const alex = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(alex);

const alexNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(alexNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving license 😘`);
} else {
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😀`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge #2

// const markMass = 78, johnMass = 92, markHeight = 1.69, johnHeight = 1.95;
const markMass = 95, johnMass = 85, markHeight = 1.88, johnHeight = 1.76;

const markBMI = markMass / markHeight**2;
const johnBMI = johnMass / johnHeight**2;

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI: ${markBMI}.
John's BMI: ${johnBMI}.`);
// console.log(markHigherBMI);

let higherBMI, lowerBMI;
let higherBMIData, lowerBMIData;

if(markHigherBMI){
    higherBMI = 'Mark'; 
    higherBMIData = markBMI;
    lowerBMI = 'John';
    lowerBMIData = johnBMI;
} else {
    higherBMI = 'John'; 
    higherBMIData = johnBMI;
    lowerBMI = 'Mark';
    lowerBMIData = markBMI;
}

console.log(`${higherBMI}'s BMI (${higherBMIData}) is higher than ${lowerBMI}'s (${lowerBMIData})!`);
*/

// Part 20.

const inputYear = '1991';
console.log('hi');

"use strict";

// const passCode = function (userName, age) {
//     return userName + age + userName[2]
// }
// console.log(passCode('ali', 10))

// const passCode2 = (namee, phoneNum) => namee + phoneNum[6];
// console.log(passCode2('mamad', '123645856'))

// const calcAverage = (num1 , num2 , num3) => (num1 + num2 + num3) / 3 ;

// const avgDol = calcAverage(44, 23 , 71);
// const avgKoal = calcAverage(65 , 54 , 49);
// console.log(avgDol, avgKoal)
// if (avgKoal >= (avgDol * 2)){
//     console.log(`x`)
// }
// else{console.log(`t`)}

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
// }

// const bills = [125 , 555 , 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

// console.log(tips);

// const farzane = {
//     firstName: 'Farzane',
//     lastName: 'Hatami',
//     birthYear : 1380,
//     job: 'coder',
//     friends: ['Zeinab','Sara', 'Mamad'],

//     calcAge: function(){this.age = 1403 - this.birthYear;
//         return this.age},

//     hasDriversLicence : hasDriversLicence => this.calcAge >= 18 ? true : false,

//     getSummary: function(){
//         return `${farzane.firstName} is a ${this.calcAge()} old ${farzane.job} who has
//         ${this.hasDriversLicence ? 'a' : 'no'} driver's license.`
//     }
//     };

// console.log(farzane.getSummary())

// const mark = {
//     firstName : 'Mark',
//     lastName : 'Miller',
//     mass : 78,
//     height : 1.69,
//     calcBmi: function(){
//         return this.mass/ this.height ** 2
//     }
// }

// const john = {
//     firstName : 'John',
//     lastName : 'Smith',
//     mass : 92,
//     height : 1.95,
//     calcBmi: function(){
//         return this.mass/ this.height ** 2
//     }
// }

// if(john.calcBmi() >= mark.calcBmi()) {console.log(`John's BMI(${john.calcBmi()}) is higher than Mark's BMI(${mark.calcBmi()}).`)}
//     else{console.log(`Mark's BMI(${mark.calcBmi()}) is higher than John's BMI(${john.calcBmi()}).`)}

// for(let abc = 1; abc <= 3; abc++){
//     alert(`hi ${abc}`);
// }

// const farzane = [
//   "Farzane",
//   "Hatami",
//   1380,
//   "coder",
//   ["Zeinab", "Sara", "Mamad"],
//   true,
// ];

// for (let rep = farzane.length - 1 ; rep >= 0  ; rep--) {
//     if (typeof farzane[rep] === 'string' ) break;
//     console.log(rep , farzane[rep])
// }

// for( let rep = 1 ; rep<= 10 ; rep++ ) {
//     console.log(`student number ${rep}`)
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log(`student number ${rep}`); rep++ ;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if( dice === 6)console.log('Loop is about to end...')
// }
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// ///////////////////////////////////////////////////////////////////

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let n = 0; n < arr.length; n++) {
//     sum = sum + arr[n];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([5, 10, 80, 40, 30]));

const far = {
  year: 2001,
  calcAge: function () {
    console.log(2024 - this.year);
  },
};

const a = {
  year: 2012,
};
a.calcAge = far.calcAge;
console.log(a.calcAge());
node ./script.js
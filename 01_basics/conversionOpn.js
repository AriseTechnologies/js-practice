"use strict";
let score = "23";



// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let score1 = Number("23abc");
// console.log(typeof score1);
// console.log(score1);

let score2 = Number(null);
// console.log(typeof score2);
// console.log(score2);

let score3 = Number(undefined);
// console.log(typeof score3);
// console.log(score3);

let score4 = Number(true);
// console.log(typeof score4);
// console.log(score4);

//Converting to number
//"33" -> 33
//"33abc" -> NaN
//true -> 1, false -> 0


let isLogin = " ";
let booleanIsLogin = Boolean(isLogin)
// console.log(booleanIsLogin);
//Converting to boolean
// 1-> true
//0-> false
//""->false
//"Umesh"->true

// converting to String
let n = 33;
let letstrN = String(33)
console.log(letstrN);
console.log(typeof letstrN);

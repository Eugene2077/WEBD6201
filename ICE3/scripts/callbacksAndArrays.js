// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 03 Feb 2023 

/* Arrays */

// Array constructor
let j = new Array();
console.log(`Empty array: ${j}`);
j.push(1);
console.log(j);

// WITH  values
let k = new Array(1, 2, 3);
console.log(k);

// initialize with one element and push
let m = new Array(1);
console.log(m);
m.push(100);
m.push(200);
m[0] = 1;
console.log(`Array with 3: ${m}`);

let r = new Array(10).fill('Friday');
console.log(`Array that happy : ${r}`);

let s = [10, 20, 30];
let newS = s.map(function (val, index) {
    return {key: index, value: val * 2};
});

console.log(newS);



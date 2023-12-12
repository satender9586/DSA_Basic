// firnt the digit of number
// example 12345678 = answer is  8


const num = 12345678;
let temp = num; 
let count = 0;

while (temp !== 0) {
    temp = Math.floor(temp / 10); 
    count++;
}

console.log(count); 

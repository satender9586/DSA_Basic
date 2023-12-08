

// fibanonnici series ex : 0 1 1 2 3 5 8 13

let firstNum = 0;
let secondNum = 1;
let thirdNum = 0;
let n = 10;



console.log(firstNum)
console.log(secondNum)

for(let i=1;i<n;i++){
    thirdNum = firstNum+secondNum;
    firstNum=secondNum;
    secondNum = thirdNum;

   console.log(thirdNum)
}

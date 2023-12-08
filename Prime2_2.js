// find kare konsa prime hai konsa prime konsa nahi hai!!.. Ex:- [1,2,3,4,22,11,33]



let arr = [7,2,22,33,4,12,16];
// print all prime number


function isPrime(value){
    let isPrimeVariable = true;
    
    for(let i=2;i<value;i++){
        if(value%i==0){
            isPrimeVariable = false
        }
    }
    return isPrimeVariable
}

function chekPrimeArray(arrs){
    for(let i=0;i<arrs.length;i++){
       console.log(isPrime(arr[i]),arr[i])
    }
}

chekPrimeArray(arr)
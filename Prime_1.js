// Kisi single value ko check kare ki ye Prime hai ki nahi

let num=14;

function checkPrime(value){
    let isPrime = true;
    for(let i=2;i<value;i++){
        if(value%i==0){
            isPrime=false
        }
    }
    console.log(isPrime)

}

checkPrime(num)
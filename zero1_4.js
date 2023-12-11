// sure ke do number jinko jod kar 0 aaye : [1,2,3,5,-2,7,9]


const numarre = [1,2,3,5,-2,7,9]

function zeroFirstTwoNumber(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
             if(arr[i]+arr[j]==0){
                 return [arr[i], arr[j]]
             }
        }
     }
}

console.log(zeroFirstTwoNumber(numarre))
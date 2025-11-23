//Q8.
//using map
let nums = [10, 3, 7, 20, 13, 2];
let squares=nums.map(num=>num*num);
console.log("Squares:",squares);
//using filter
function isPrime(n){
    if(n<=1) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n %i ===0) return false; 
    }
    return true;
}
let primes=nums.filter(isPrime);
console.log("Orime numbers:",primes);
//using reduce and find sum
let sum =nums.reduce((acc, curr)=>acc+curr,0);
console.log("Sum of elemnets:",sum);
//using sort
let sortDesc = nums.sort((a,b)=>b-a);
console.log("Descending order:",sortDesc);
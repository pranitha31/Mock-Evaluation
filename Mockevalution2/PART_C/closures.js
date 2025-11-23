//Q10. Simple Closure
function counter(){
    let count =0;
    return function(){
        count +=1;
        return count;
    };
}
const c=counter();
console.log(c());
console.log(c());
console.log(c());

//Q11. Medium Closure
function createWallet(){
   let balence=0;
   function addMoney(amount){
    balence +=amount;
   }
   function checkBalance(){
    console.log(balence);
   }
   return{
    addMoney:addMoney,
    checkBalance:checkBalance
   };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();

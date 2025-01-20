//find the number is prime or not 

function Prime(num){
    let Primecount=[]
  for(let i=0;i<=num;i++){
    if(num%i==0){
        Primecount.push(i)
    }
  }
  return Primecount
}

let num = 10
let result = Prime(num)
if(result.length > 2){
    console.log("Number is not primeNumber")
}
else{
    console.log("Number is prime")
}
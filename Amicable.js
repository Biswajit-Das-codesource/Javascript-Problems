// Amicable numbers are pairs of numbers where each number is the sum of the other number's proper divisors, excluding the number itself:

// The numbers 220 and 284 are amicable numbers because: 
// The sum of the proper divisors of 220 is 284: 
// 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
// The sum of the proper divisors of 284 is 220: 
// 1 + 2 + 4 + 71 + 142 = 220 

function Amicable(num1,num2){
    let num1Fact=[]
    let num2Fact=[]
    for(let i = 0;i<num1;i++){
        if(num1%i==0){
            num1Fact.push(i)
        }
    }
    console.log(num1Fact)
    for(let j = 0;j<num2;j++){
        if(num2%j==0){
            num2Fact.push(j)
        }
    }
    // console.log(num2Fact)

    //sum of factors of num1 and num2

    num1Factsum=0
    num2Factsum=0

    num1Fact.forEach(e=> {
        num1Factsum+=e
    });
    num2Fact.forEach(e=> {
        num2Factsum+=e
    });

    if(num1Factsum === num2 && num2Factsum ===num1){
        console.log("These two number is amicable")
    }
    else{
        console.log("These number is not amicable")
    }

}

let num1 = 284
let num2= 220
Amicable(num1,num2)
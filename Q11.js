//find the factors of the number 

function Factor(num){
    for(i=1;i<=num;i++){
        if(num%i==0){
            console.log(i)
        }
    }
}


num = 10
Factor(num)
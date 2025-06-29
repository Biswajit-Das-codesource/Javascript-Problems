function Factorial(num){
    let f=1
    while(num>0){
        f=f*num
        num--
    }
    console.log(f)
}

Factorial(5)
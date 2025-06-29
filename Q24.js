// find the correct triangle name form the measurement

function triangle(a,b,c){
    if(a===b && a===c){
        console.log("equilateral triangle")
    }
    else if(a===b || b===c || a===c){
        console.log("isoscale triangle")
    }
    else{
        console.log("scalene triangle")
    }
}

triangle(3,4,3)
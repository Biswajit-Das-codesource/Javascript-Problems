//find the largest string in an array after the combining the all string present in the array 


function calculate(obj){

    // console.log(obj)

    let arr=[]
    for(let i of obj){
        for(let j of obj){
            arr.push(i+j)
        }
    }
    console.log(typeof arr)
    return arr.reduce((largest, current) => 
        current.length > largest.length ? current : largest, 
        ""
      );

      
}

obj = ["hello", "aja","apple","banana","pie"]
console.log(calculate(obj))
function Avg(arr){
    let sum = 0
    for(let i of arr){
        sum+=i
    }
    let avg=sum/arr.length
    console.log(avg)
}

Avg([1,2,3,4,5])
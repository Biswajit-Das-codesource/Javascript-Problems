// function TwoMergeArray(num1,num2)
// {
//    const num3 = num1.concat(num2).sort()
//    const sum = (num3[0]+num3.length)/2
//    return sum
// }
// num1=[0,0]
// num2=[0,0]

// const value = TwoMergeArray(num1,num2)
// console.log(value)


// num1=[1,3]
// num2=[2]
// num3=num1.concat(num2)

// const arr = [11,21,121,211,31,323,42,12,3]

// for (let i =0 ;i<=arr.length ;i++){
//    for(let j=0;j<=arr.length;j++){
//          if(arr[i]>arr[j]){
//             let Max=arr[i]
//             console.log(Max)
//          }
//    }
// }

function largest(str) {
    console.log(str)

    let arr=[]
    for(let i of str){
        for(let j=1;j<str.length;j++){
            console.log(i,str[j])
            let data=i+str[j]
            console.log(data)
            arr.push(data)
        }
    }
    console.log(arr)
  
    let data = arr.toString()
    console.log(data)
  for(let i of data ){
    console.log(Math.max(...i.split(" ").map(i=> i.length)))
  }
    // console.log(Math.max(...length))

}

str=["banana","apple","pie","task"]
largest(str)


// let arr = [901, 200, 13, 824, 25, 60, 79, 18, 23, 10];

// let num = arr[0]; // Initialize `num` with the first element of the array.

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > num) {
//         num = arr[i]; // Update `num` if the current element is greater.
//     }
// }

// console.log(num); // Output the largest number.



const arr=["banana","apple","orange","watermelon"]

let largestString=arr[0]

for(let i=1;i<arr.length;i++){
    if(arr[i].length>largestString.length){
        largestString=arr[i]
    }
}

console.log(largestString)



// Find the palindrome word in the sentence

let Findpalindrome=[]
function palindrome(sentence){
    let splitSen=sentence.toString().split(" ")
    // console.log(splitSen)
    for( let i of splitSen){
       let rev=(i.split('').reverse().join(''))
       if(i === rev){
            Findpalindrome.push(i)
       }
    }
    return Findpalindrome;
}

let sentence="my mom and dad is very good"
let result = palindrome(sentence)
if(result.length > 0){
    console.log("palindrome",result)
}
else{
    console.log("not")
}
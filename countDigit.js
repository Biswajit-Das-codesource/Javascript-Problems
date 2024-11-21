//count the number of digit in the number 
function Count(num){
    let Count=0
    while(num>0){
        num=Math.floor(num/10);
        Count++
    }
    console.log(Count)

}

let num = 1231
Count(num)
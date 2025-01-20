//count the number of repeatation of the word in string


function Count(str,find){
    let count = 0 
    for(let i of str){
        if(i.toLowerCase()==="i"){
            count+=1
        }
    }
    console.log(count)
}


Count("mIssIsipi","I")
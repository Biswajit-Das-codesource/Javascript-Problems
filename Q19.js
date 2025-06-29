function repeatation(word,times){

    items=[]
    for(let i=0;i<times;i++){
        items.push(word)
    }
    console.log(items.toString().split(",").join(""))
}


repeatation("abc",5)




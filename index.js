// Find Duplicate word in sentence 

let sentence= "hiii my my name name is biswajit das".split(" ")
wordcount={}
duplicate=[]
for(let i of sentence){
    wordcount[i]=(wordcount[i] || 0)+1
}
for(let j in wordcount){
    if((wordcount[j])>1){
        duplicate.push(j)
    }
}
console.log(duplicate)


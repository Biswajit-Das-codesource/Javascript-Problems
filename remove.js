// Remove the vowels from a sentence 

let vowels = []

function Remove(sentence){
    console.log(sentence)
    let splitSen=sentence.split("")
    for (let i of splitSen){
        if(i!=="a" && i!=="e" && i !=="i" && i!=="o" && i!=="u"){
            vowels.push(i)
        }
    }
    console.log(vowels.join(""))
}
let sentence  = "my name is biswajit das"

Remove(sentence)
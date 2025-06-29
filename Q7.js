// input = "my name is biswajit das"
//output = "My Name Is Biswajit Das"

let arr=[]
function concate(str){
    
    let data = str.split(" ")
    data.map((e)=>{
       let real = (e[0].toUpperCase()+e.substring(1))
        arr.push(real)
      
    })
    console.log(arr.join(" "))

}

let str="my name is biswajit das"
concate(str)
const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from 1 ")
    },2000)
})

const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from 2 ")
    },5000)
})

const pr3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from 3 ")
    },2000)
})

Promise.all([pr1,pr2,pr3])
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


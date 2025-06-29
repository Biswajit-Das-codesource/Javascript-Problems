function Equal(arr1,arr2){

    if(arr1.length !== arr2.length){
        console.log("not equal")
    }
    else if(arr1.every((curval,index) => curval===arr2[index])){
        console.log("true")
    }
    else{
        console.log("no equal")
    }
}

Equal([1,2,3],[1,2,3])
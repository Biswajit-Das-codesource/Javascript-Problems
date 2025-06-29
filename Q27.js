//check the non repeated string from the word

function checKFirstNonEmpty(Str) {
  console.log(Str);

  let arr = Str.split("");
 
  let count = {
    a: 0,
    b: 0,
    c: 0,
  };

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "a") {
      count.a++;
    } else if (arr[i] === "b") {
      count.b++;
    } else if (arr[i] === "c") {
      count.c++;
    }
  }


  for(let i = 0 ; i<Str.length;i++){
   if(count[Str[i]]===1){
    console.log(Str[i])
   }
  }

  console.log(count);
}

const STR = "aaabbbbcdaabb";
checKFirstNonEmpty(STR);

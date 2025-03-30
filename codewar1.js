function spinWords(str1) {
  const result = [];
  let arr = str1.split(" ");
  for (let i of arr) {
    if (i.length >= 5) {
      result.push(Array.from(i).reverse().join(""));
    } else {
      result.push(i);
    }
  }

  return result.join(" ");
}

let str1 = "Hey fellow warriors";
console.log(spinWords(str1));

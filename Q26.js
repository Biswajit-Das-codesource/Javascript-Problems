// function strStr(haystack, needle) {
//     return haystack.indexOf(needle);
// }

// // Example usage:
// console.log(strStr("sadbutsad", "sad")); // Output: 0
// console.log(strStr("leetcode", "leeto")); // Output: -1

async function handleFetch() {
  const fetchdata = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const jsondata = await fetchdata.json();
  console.log(jsondata);
  //   jsondata?.game_indices.map((e) => {
  //     console.log(e);
  //   });
}

async function handleFetch2() {
  const fetchdata = await fetch("https://fakestoreapi.com/products");
  const jsondata = await fetchdata.json();
  console.log(jsondata);
  // jsondata?.game_indices.map((e) => {
  //   console.log(e);
  // });
}

handleFetch();
handleFetch2();

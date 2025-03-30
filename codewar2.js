function like(names) {
  // TODO
  let res = [];
  let total = names.length;
  const ftwo = names.splice(0, 2);

  for (let i of ftwo) {
    res.push(`${i}`);
  }

  console.log(
    `${res.join(",")} ${total < 3 ? "" : `and ${total - 2} are `}likes ur post`
  );
}

let likes = ["pranam", "biswa","biswajit","king","queen"];

like(likes);

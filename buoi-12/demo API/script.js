

//1

async function getAPI(e) {
  let x = await fetch(e);
  let y = await x.json();
  console.log("test", y);
}

// getAPI("https://jsonplaceholder.typicode.com/todos/");

//2

async function getAPI2(e) {
  let a = await fetch(e);
  let b = await a.text();
  console.log("test2", b);
}

// getAPI2("https://raw.githubusercontent.com/openai/gym/master/README.md");

//3

async function getAPI3() {
  await getAPI("https://jsonplaceholder.typicode.com/todos/");
  await getAPI2(
    "https://raw.githubusercontent.com/openai/gym/master/README.md"
  );
  let c = await fetch("https://api.github.com/users/bard");
  let d = await c.json();
  console.log("test3", d);
}
getAPI3();

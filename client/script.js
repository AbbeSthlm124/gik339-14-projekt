const url = "http://localhost:3000/bilr";
fetch(url)
  .then((result) => result.json())
  .then((bilr) => console.log(bilr));

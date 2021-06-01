// data lands on the console
fetch('https://api.thenounproject.com/collection/dog/icons?limit=10')
  .then(response => response.json())
  .then(data => console.log(data));


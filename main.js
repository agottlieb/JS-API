fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => console.log(data));


  const ul = document.getElementById('logins');
  const url = 'https://api.github.com/users?results=10';

  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
}
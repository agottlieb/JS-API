const key = config.MY_API_TOKEN;
const secret = config.SECRET_API_KEY;
const status = 'adoptable';
const ul = document.getElementById('pet-info');
const submit = document.getElementById('submit');
let breed;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


//function to change value of breed to new value
function handleSubmit (event) {
    event.preventDefault();
    //clears previous data
    document.getElementById('pet-info').innerHTML="";
    
    const userInput = document.getElementById('breed');
    breed = userInput.value;


    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {
    
        // Return the response as JSON
        return resp.json();
    
    }).then(function (data) {
    
        // Log the API data
        console.log('token', data);
    
        // Return a second API call
        // This one uses the token we received for authentication
        return fetch('https://api.petfinder.com/v2/animals?breed=' + breed + '&status=' + status, {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    
    }).then(function (resp) {
    
        // Return the API response as JSON
        return resp.json();
    
    }).then(function (data) {
    
        // Log the pet data
        console.log('pets', data);
    
    //start here for print to HTML 
    let names = data.animals; 
        return names.map(function(pet) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            if (pet.primary_photo_cropped != null) { 
                img.src = pet.primary_photo_cropped.small}
            span.innerHTML = `${pet.name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    
    })
    
    .catch(function (err) {
    
        // Log any errors
        console.log('something went wrong', err);
    
    });


}

submit.addEventListener('click', handleSubmit);



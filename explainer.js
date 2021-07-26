//step 1: use the fetch method, accepts a URL as an argument
fetch(url)

//step 2: promise method-- if the promise is resolved (aka you got the data from 
//the API) the function within the then method is executed

.then(function() {

})

//step 3: catch method- when fetch promise is returned as resolve, this is the
//function that deals with that 
.catch(function() {

});

//steps 1-3
fetch(url)
.then(function() {

})
.catch(function() {

});

//step 4- the first promise is to convert the info to JSON files
fetch(url)
.then((resp) => resp.json())

//step 5 process the JSON data and then set a variable which is the converted results
.then(function(data) {
    let authors = data.results;
})

//step 6 map function to return individual data points
return authors.map(function(author) {

})

//GET ==FETCH. retrieving data
//POST== send data to a server, stored in the HTTP request, if send multiple times, multiplies the resource
//PUT== send data to server (always get same result)


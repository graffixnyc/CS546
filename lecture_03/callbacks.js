// console.log("Plant corn");
// console.log("Water plant");
// console.log("Add fertilizer");


console.log("Plant maize");

setTimeout(function() {
  console.log("Water plant")
},3000);

console.log("Add fertilizer");

/* Why? The setTimeout function makes the operation asynchronous by deferring plant watering to occur after 3 seconds. 
The whole operation doesn’t pause for 3 seconds so it can log “Water plant”. Rather, the system goes ahead to apply 
fertilizers and then water plant after 3 seconds.
*/

/* Callback Functions
When a function simply accepts another function as an argument, this contained function is known as a callback function. 
Using callback functions is a core functional programming concept, and you can find them in most JavaScript code; 
either in simple functions like setInterval, event listening or when making API calls.

*/

//Callback functions are written like so:

//The set interval function will fire the callback function every second
//so we can expect 'hello!' to be outputted every second.

// setInterval(function() {
//     console.log('hello!');
//   }, 1000);

//another example using the .map() function

const list    = ['man', 'woman', 'child']

// create a new array
// loop over the array and map the data to new content
const newList = list.map(function(val) {
  return val + " kind";
});

newList = ['man kind', 'woman kind', 'child kind']

newList.forEach(val =>{
    console.log (val);
})

/*In the example above, we used the .map() method to iterate through the array list, 
the method accepts a callback function which states how each element of the array will be manipulated. 
Callback functions can also accept arguments as well.*/


/* Naming Callback functions
Callback functions can be named or anonymous functions. In our first examples, 
we used anonymous callback functions. Let’s look at a named callback function:*/

function greeting(name) {
    console.log(`Hello ${name}, welcome to CS-546!`);
  }

  function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
  
    callback(fullName);
  }
  
  introduction('Patrick','Hill', greeting); 


function study(subject, callback){
    console.log (`I am about to study ${subject}`);
    callback(subject);
}

function afterStudy(subject){
    console.log (`I'm done studying ${subject}.  Now it's time to Party!`);
}

study("Web Programming",afterStudy)

study("MongoDB",(subject) =>{
    console.log (`I have studied too much ${subject} and I am tired`)
})

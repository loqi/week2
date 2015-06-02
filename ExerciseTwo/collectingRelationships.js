var youDontNeedToWorryAboutAnythingInHere = function() {
  var nameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", "Gloria Wyche", "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
  var jobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior Designer', 'Nun'];
  var cityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
  var emptyNetwork = [];

  // Assume `collection` is an array. Populate it with one new user object for each name in
  // nameArray, and a randomly selected job and city for each of these new user objects.
  function createNetwork(collection){
    // Create and push a new user object for each name, assigned a job and a city.
    for (var i = 0; i < nameArray.length; i++) {
      var randomJob = jobArray[Math.floor(Math.random() * jobArray.length)];
      var randomCity = cityArray[Math.floor(Math.random() * cityArray.length)];
      // Recall the discussion of variable hoisting from Excercise One. Here we
      // have `var` statements inside a loop. Because of hoisting, the `var` part
      // of the line only gets run once, as if we had had `var randomJob, randomCity;`
      // as it were on the first line of the script. But the assignment and
      // expression evaluation gets run with every iteration, when the interperter
      // brings flow control inside the loop, whether the `var` keyword appears in
      // the line or not.
      // The principal purpose of `var` is to ask that a new variable be created in
      // the current execution context (current scope). If we forget the `var`
      // keyword, the interpreter assumes we want to use an existing variable in
      // this or any enclosing scope, so it searches for a variable name match from
      // the current scope progerssively outward until it either finds the variable
      // or reaches the global scope, where it can search no further. At that point,
      // if no match is found, the interpreter creates a new variable -- in the
      // global scope.
      //
      // In other words, if you want a new variable in the current scope, you must
      // say so with the `var` keyword. Otherwise you'll either be inadvertantly using
      // messing with an existing variable of the same name in any enclosing scope, or
      // inadvertently creating a new variable and leaveing it littering the global
      // scope, even after your code completes until the web application completes.
      //
      // This illustrates a guiding design principle consistently followed by Brendon
      // Eich in his language design choices: always make the wrong call. Okay, that's
      // not really Brendon Eich's guiding principle, but sometimes it seems he was
      // trying to be positively malicious. End of rant.

      // Append new user with this name, job, and city onto the end of `collection`.
      collection.push(createNewUser(nameArray[i], randomJob, randomCity));
    }
    // Done building the collection. Return it.
    return collection;
  }
  // Return a new array of new users to whatever invoked `youDontNeedToWorryAboutAnythingInHere`
  return createNetwork(emptyNetwork);
}

// Given three strings, create and return an object that describes a user whose name
// is the first string, whose job is the second string, and whose city is the third.
function createNewUser(username, job, city){
  return  { username: username
          , job: job
          , city: city
          , friends: []
          , family: []
          , coworkers: [] };
  // Does this return statement make sense to you? What do you guess it's doing?
  // Discuss with your partner and read the docs for a JavaScript return statement.
  // If you have trouble finding the documentation for the return keyword, be sure
  // to as an instructor how to look up the documentation and how to understand
  // what you find there.
  //
  // So here's how to interpret that return statement:
  // The return keyword follows this form `return an_optional_expression;` and
  // it tells the interpreter to resolve the expression if included and then
  // immediately cease executing this function, returning control to the code
  // that invoked it. The function invocation expression like
  // `createNewUser(nameArray[i], randomJob, randomCity)` then resolves to that
  // value, and if it's part of a bigger expression, it gets integrated into that
  // expression's eventual resolution.
  // So what's this { username:username, ... } expression?
  // We've seen this before. It's just an object literal. The line says
  // build an object somewhere, and return from this function, using a reference
  // pointing to that object as the return value.
  //
  // We could have instead used a `var` statement to create a variable and then set
  // that variable to point to the object created by our literal, and then returned
  // the content of that variable. That would've worked too. Something like this:
  //      function createNewUser(name, job, city){
  //        var user = { username:name, job:job, city:city, friends:[] };
  //        return user;
  //        }
  // Same effect with slightly less code and computational work:
  //      function createNewUser(name, job, city){
  //        return { username:name, job:job, city:city, friends:[] };
  //        }
}

// Now that we have the basic functions and variables we need all set up, we can
// use them to build a single user in a variable (a user object pointed to by a
// reference in a single variable) named joeyProfile, and that user's social netwark
// in a second variable, joeyNetwork.

// create a user.
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating a network.
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like

//////////////////////////////////////////////////
// YOUR CODE BELOW HERE
// see collectionRelationships.md for instructions

//console.dir(joeyProfile);

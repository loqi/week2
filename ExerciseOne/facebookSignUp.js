////////////////////////
// Hi Preston and Albrey. I am still having fun so I'm editing this file line-by-line.
// If I violate any style convention, please forgive and fix. If you aren't really
// interested in any part or all of this pull request, please discard whatever doesn't
// fit your needs. I will not be offended at all. But if you do discard it, I don't
// require but would appreciate a brief explanation. It's yours to do with as you will.
//
//          ~Park
//
////////////////////////

/*
Congratulations on making it to part two of Objects! This section
is about using your new knowlege to debug a small program.

Imagine you're a contracted engineer brought on by Facebook to fix some
of their internal bugs. The programmer before you made a lot of mistakes
and its your job to use your new knowledge to clean up the mess.

Even though they weren't a very good programmer, they were VERY thorough
about leaving comments. Read the comments to get tips about the bugs as
well as insights into new information about JavaScript.

This section focuses on Objects. The code is running with pretty limited
functionality. Throughout the day we'll fix bugs, which will unlock more
robust functionality so that you can see how your fundamentals will be
used in the wild.

TIPS

1. Each function depends on the one before it. Don't uncomment the next
function call until you've fixed the previous one.

2. This is a bug treasure hunt. It is up to you to find and fix the bugs
in given parts of the program. Some mistakes are obvious, others are not
-- attention to detail is key.

3. The console is your friend and will *usually* lead you in the right
direction to the next bug.

4. If you don't recognize something look it up. The internet is every
programmer's best friend - make sure you utilize it and expand your
programming knowlege. Full time engineers use Google and StackOverflow
constantly- this is a part of your required learning.

5. Have fun, if you're stuck for too long it becomes tedious. Don't feel
bad for using the hints, these are tough exercises!
*/



// The Facebook user is modeled in an object. In a real application we'd be
// getting the data from a database server through its Application Programming
// Interface, possibly across the Internet and converting it to a JavaScript object
// using what's called an Object Relational Mapper. For this excercise we build it
// in place with hardcoded data. A real application would have a pretty web-based
// form and rich user interaction. Here we use the Windoow.prompt() method, a handy
// browser method for basic user input. Read up on the prompt method:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt - Mozillia docs
// http://bit.ly/1CzM0Oe - A little Quackit live demonstration

// Ask the interpreter to create an object with five properties somewhere in its memory heap.
// Ask it to create a variable in its symbol table. Ask it to assign that variable the a
// memory reference pointing to that new object sitting in the heap. Don't expect to already
// know what all that means. Do expect to understand that the variable named `facebookUser`
// keeps a little reference pointing at a bigger object, not the object itself.
var facebookUser = {
      firstName: null,
      lastName: null,
      password: null,
      email: null,
      confirmPassword: null,
};

// JavaScript uses lexically scoped variable name binding. This is a jargonny way of
// saying that the `var` statement above creates a variable in such a way that it can
// be seen and manipulated by the code inside all the functions that are defined at
// the same level or deeper. That means the named function `signUpNewMember` below, as
// well as the inner one `signUp` nested deeper inside, can have code that expects to
// find a variable called `facebookUser` ready for action and persisting anything they
// do to it -- even when those functions return and are later re-invoked. Code out here
// can expect to see the variable `facebookUser` and named function `signupNewMember`
// because, afterall, they are both declared out here. But code out here cannot expect
// to see the named function `signUp` or the variable `key`, since those identifiers are
// declared inside of the signUpNewMember function and the even deeper (more inner)
// context of the nested named function `signUp`, but nowhere out here or in an even
// shallower (more outer, less indented) context.


// signUpNewMember() is meant to be run as soon the user arrives. It interacts with the
// user to create a new Facebook user object and pretend to save it to our fictional database.
function signUpNewMember(){
  // THIS CODE IS VERY BUGGY. USE THE CONSOLE TO FIND AND FIX BUGS ONE BY ONE.

  // signUp() asks the user to input any missing (null value) fields in facebookUser
  // object. For our own convenience, we just go ahead and expose our object keys as
  // field names to the user in the prompt messages. Each null value of facebookUser
  // gets one prompt to the user, who then inputs text, which is returned from
  // Window.prompt() as a string and then replaces that null value. A real applica-
  // tion would treat *all* user input with suspicion out of concern for security
  // and data integrity. We're in a very trusting mood today. To get this to run,
  // find the commented-out line that calls signUp and make it live and start fixing.
  function signUp(){
    for (var key in facebookUser) {
      // Does the property named `key` of `facebookUser` object have a null value?
      if (facebookUser.key === null) {
        // Prompt the user with a message, and accept text input from the user
        //console.log(hintTwo());
        var userInput = prompt("What's your " + facebookUser[key] + '?');
        // reassign the key value to the usersInput we just gathered from the user.
        key = userInput;
        //console.log(facebookUser);

//FIXME: I couldn't actually figure out what this instruction means:
        // uncomment line 121 to see the reassignment. Re-comment it to keep the console uncluttered
//FIXME: Surely it doesn't mean to log hint #3. I think it means there's some code that temporarily bypasses the buggy code, but I don't see it.
        // Your facebookUser object should look something like this:
        // { firstName: 'Earth', lastName: 'Wind, and Fire', password: 'bestOfAllTime',
        //   confirmPassword: 'bestOfAllTime', email: 'septemberIsAClassic@gmail.com' }
        //console.log(hintThree());
      } else {
        //console.log(hintOne());
      } // end of `else` clause, which ends `if` conditional construct
    } // end of `for` loop construct
  } // end of signUp function definition.
  // Is signUp function working now? Go find the commented-out line that calls
  // checkAllFields() and comment it in. Continue debugging.

  // checkAllFields is a function that verifies that there's no property in the user
  // model object that still has a null value. We again ask the user to enter data
  // for such properties.
  function checkAllFields(){
      // Simulate a forgotten value by adding a new property with a null value.
      facebookUser['favoriteFood'] = null;
      /* iterate through the facebookUser object*/
      for (var key in facebookuser) {
        // check to see if the assigned value is null
        if (facebookUser.key === null) {
          // Found one. Prompt the user for the value and save it in the object.
          //console.log(hintFive());
        key = prompt("You missed an input field. What's your " + facebookUser['key'] + '?');
        // FIXME: This line should probably have a hint like "Is the `key` variable really where the user input belongs?"
//FIXME: Note that Window.prompt() only returns null when the user clicks cancel, and only in some browsers. Hitting return on a blank field or clicking OK will return "" string.
        } else {
          //console.log(hintFour());
        }
      }

      // uncomment this console.log() to see if the field has been filled with user input.
      //console.log(facebookUser);

      // If you're finished, uncomment the call to confirmInformation() and keep debugging.
    }

    // The next code creates a function and names that function `confirmInformation`.
    // Invoking that function causes the browser to asks the user to verify the
    // information they just gave when the signUp function was being executed.
    // any expression with `...confirmInformation(...)...` in it passes whatever
    // is in the comma-separated list of expressions inside the round parentheses
    // to the function `confirmInformation` and then invoke (run) that function.
    // In this case, confirmInformation is written with no parameters, so any
    // argument that's passed in is simply ignored. Normally it's exected to be
    // called with absolutely nothing in the parentheses, like the code you just
    // uncommented.
    function confirmInformation(){
      // Make a string and a variable. Point the variable at the string.
      var userPrompt = "Please verify the following information. If it is " +
        "correct, type the word 'yes' into the text box and press enter.\n";
        // The `\n` sequence above is called an "escape sequence". It's meaning is
        // spelled out in the JavaScript specification (rules) for how a interpreter
        // is supposed to parse a string literal. It lets us put weird characters
        // into our string literals, like a quotation mark `\"` a tab character `\t`,
        // or a newline sequence `\n` into a string in a convenient, if slightly ugly
        // form. `\n` means "Excuise me, JavaScript interpreter, would you be so kind
        // as to insert whatever characters the operating system you're currently
        // running on uses as its standard newline sequence?" In Windows that's
        // the character 13 followed by 10. On Linux, Max OS X, and any other Unix
        // flavor it's chracter 10, and on classic (pre-X) Mac it's character 13.
        // The interpreter knows which one to use in its own environment, so your
        // code doesn't have to figure it out. `\n` gets translates to whatever is
        // customary over there in Userland where the browser's JS interpreter runs.

      // iterate through the facebookUser object
      for (var key in facebookUser) {
        // Add our list of keys and values to the userPrompt string so they can see the
        // full list of the information they entered.
        userPrmpt += (facebookUser[key].toUpperCase() + ': ' + facebookUser[key] + '\n');
        console.log(hintSix());
      }
      // Save the user's answer in a variable
      var userAnswer = prompt(userPrompt);
      // If the user said yes, Yes, YES, or even yEs, They're done.
      // EXTRA CREDIT: try to get it to be reasonable about "yes ", " yes", and "    yes    "
      if (useranswer.toUpperCase() === 'YES') {
        //console.log(hintSeven())
        var userFirstName = facebookUser.firstName;
        var userLastName = facebookUser.lastName;
        var signInPrompt = "Welcome, " + facebookUser.userFirstName + " " + facebookUser['userLastName'] + ". you are now signed in!"
        alert(signinPrompt);
        // "Comment in" the next line after you have fixed all the bugs
        // window.location.assign('http://media.tumblr.com/tumblr_m3ppveMgu71r4lux2.gif');
      }

    }
    signUp();
    checkAllFields();
    confirmInformation();

    return facebookUser;
} // terminates signUpNewMember function body.

// At this point, the interpreter will have created the `facebookUser` variable
// and the `signUpNewMember` function. Inside signUpNewMember, there are more
// function declarations and expressions that cause those inner functions to be
// invoked. the signUpNewMember function returns a user object, but the line
// below doesn't record it anywhere. We can call signUpNewMember because the
// function has been created and the name has been recorded. Only after the
// interpreter gets inside that function does it see the inner functions in
// there and build and name them. Let's run that function now.

// Make a list of all the hint messages, but in such a way that we don't have to
// read them right here in front of our eyes.
var obfuscatedHints =
  [ "Chg n pbafbyr.ybt vagb lbhe vs fgngrzrag (yvar 89) gb frr vs vg'f ehaavat. Vs vgf abg, jung'f jebat jvgu bhe vs fgngrzrag?"
  , "Qb jr jnag bhe cebzcg cevagvat ahyy? Vs abg, ubj pna jr znxr bhe cebzcg ybbx yvxr guvf 'Jung vf lbhe svefgAnzr?'"
  , "Ybbx ng lbhe bowrpg va gur pbafbyr, fubhyqa'g gur 'ahyy' inyhrf or ercynprq jvgu gur hfref vachg?"
  , "Jung'f gur qvssrerapr orgjrra '=' naq '==='" // *** SPOILER ALERT *** (Oops! too late.)
  , "Vf bhe cebzcg nfxvat gur hfre sbe gur evtug vasbezngvba?"
  , "Ner lbhe svryqf dhvgr evtug? Qbhoyr purpx naq znxr fher rirelguvat znxrf frafr!"
  , "Nyjnlf fgevir gb jevgr zber uhzna-fbhaqvat pbqr. Ubj qb jr npprff n xrl hfvat n inevnoyr?"
]; // This is an alternate style for wide lists. Leading commas are like bullet points making missing commas stand out.

// There shows an important JS behavior called "hoisting". Before the code of a
// function (or the code of the global context, like the lines on the leftmost
// edge of this facebookSignUp.js file) begin to be executed, they are scanned
// for all `var` and `function` keywords at that level. The `function` keyword
// cause a function to be built up and named at the execution context in which
// the line of code appears. The `var` keyword causes a new variable to be created
// and named at that execution context, but not yet initialized, even if it has
// the optional assign clause as part of the var statement. These `var` and
// `function` executions happen first, before the top line gets executed: hoisting.
//
// The line `var obfuscatedHints = [...];` above runs as if the line
// `var obfuscatedHints;` were up the top line of this script and the line down
// here were just `obfuscatedHints = [...];`. So the variable gets created early
// but loaded late. Until the interpreter gets down here, there will be a variable
// called `obfuscatedHints` with nothing in it, and that empty (undefined) variable
// will be available to the code of the signUpNewMember() function, since it's
// defined at the same level as obfuscatedHints, as well as being available to the
// code of the signUp() function, since it's defined inside a function that is
// defined at this level.
//
// When the interpreter has executed down to here, the variable `obfuscatedHints`
// has a JS reference in it that points to an array object, whose array data area
// is seven elements in length, each element of which holds its own JS reference
// pointing to a string object. That was quite a mouthful. Once you and your
// audience really really understand that no variable or array element can contain
// an actual object but can only contain a reference to an object, you don't say
// all of those words. Instead you say "obfuscatedHints *is* an array *of* strings."
// As awesomely skilled JavaScript prodigies, when we hear the short sentence, we
// know it really means the long sentence.
//
// FUN WITH HOISTING: Put `signUpNewMember();` above `var obfuscatedHints = [...];`
// and uncomment one of the hint-logger lines inside the `signUpNewMember` function,
// using a hint you've already seen. You should get a runtime error complaining about
// trying to index into `undefined` as if it were an array. That's because running
// signUpNewMember before obfuscatedHints has been loaded, calls one of the hint logger
// functions, which in turn tries to read a value from obfuscatedHints[something] at
// a time when obfuscatedHints hasn't yet been loaded. When a variable is not yet
// loaded with anything, its name in an expression resolves to `undefined`, so the
// interpreter sees something like `undefined[something]` and gives up with an error.
//
// If this doesn't all make sense yet, don't panic. Just keep working and re-read
// this section again later, when you've incorporated more pieces of the JS puzzle
// into your developing mental model of JavaScript. It eventually clicks.





// Now that everything has been set up, execute the whole `signupNewMember` function.
signUpNewMember();





///////////////////
// Helpers go below

// Remember, our culture numbers items on a list starting at one, but numbers
// a person's age starting at zero. That's why the hint names are out of
// sync with the hint indexes. JS arrays are indexed like our birthdays.
// Our "first birthday" is one full year after our "date of birth", and we
// are one year of age *beginning* at our first birthday and continuing
// intil we *begin* being age two on our second birthday.
function hintOne()   { return rot13(obfuscatedHints[0]); }
function hintTwo()   { return rot13(obfuscatedHints[1]); }
function hintThree() { return rot13(obfuscatedHints[2]); }
function hintFour()  { return rot13(obfuscatedHints[3]); }
function hintFive()  { return rot13(obfuscatedHints[4]); }
function hintSix()   { return rot13(obfuscatedHints[5]); }
function hintSeven() { return rot13(obfuscatedHints[6]); }

// In a real application, we would notice that that code has a high degree of repetition.
// We would adhere to the good coding practice of DRY ("don't repeat yourself"). We would
// find a way to consolodate all those functions into a single function. This is not
// because we are too lazy to do all that typing. It's because when you have multiple
// versions of the same(ish) code knocking around, they can diverge when somebody edits
// one but doesn't methodically hunt through and update all the others. In a real
// application the repeated code is not always so obvious about its existence, so it
// can easily get out of sync. We'll go WET ("write everything twice").
//
// For extra credit, you could rewrite the hint code sprinkled throughout this file in any way
// that makes sense to you and works correctly, but doesn't have similar code written more than
// once. Remember, best practices have a heirarchy of value. The prime value: DIW "does it work?"
// In software engineering, "Correct" code means code that does what it's supposed to do in all
// circumstances. Correct trumps DRY every time. 'Tis better to be ugly than dead.


// rot13 is a traditional Unix substitution cypher ("rotate all letter characters
// forward 13 places in the alphabet"). It is its own decypher, since doing this a
// second time lands us back where we started. The code is a bit tricky and contains
// a lot we haven't taught you.
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode( (c=c.charCodeAt(0)) + (c<78 || c>90&&c<110 ? 13 : -13));
  });
}
// Notice that the hint-giving functions invoke the `rot13` function, even though the
// code for `rot13` doesn't exist until the interpreter reaches here. How can those
// hintSomething() functions get away with using rot13? Discuss this with your pair.

// Super-mondo extra credit:
// Figure out some or all of how the rot13 function works. This is way beyond
// the level you're expected to be at for quite some time. Give yourself enough
// of a workout to break a pretty good sweat. In a real application, we see
// confusing stuff all the time. Only sometimes do we actually try to figure
// out how it works. If it works, don't jiggle it. Don't even try to understand
// it unless you're giving yourself a workout on purpose. Professional engineers
// are professional because someone else is paying them to engineer. Don't waste
// your employer's money playing video games or reverse engineering something
// that already works. Now go reverse engineer rot13 because you're paying us!

// Since JavaScript doesn't enforce private access to properties in objects, a common convention
// is to name private variables with a leading underscore. This is meant to flag a human reader
// that this variable is not intended to be exposed to the outside world.
//
// By analagy, think of a kitchen appliance, like a blender. This blender has a user interface
// of buttons and knobs.  Even the power cord and removable pitcher can be thought of as part
// of the user interface. It also has machinery inside like motors and and gears and wires.
// While it is possible to get out a screwdriver and poke around inside the case, anyone who does
// so will know they're messing with the guts because they had unscrew some fasteners and pry
// the thing open. A well designed kitchen appliance will segregate the guts from the normal user
// controls. Future models of this blender might have the identical user interface and radically
// refactored machinery inside the case.
//
// An identifier named with leading underscore is meant to flag the outside world that a property
// is not part of the user interface. It roughly means it can't be relied on to always work the
// same way, or even continue to exist at all in future versions of the software. There's nothing
// in JavaScript to enforce privacy, but the naming convention at least flags others that they
// shouldn't expect nice or stable behavior from this variable. They're poking at the guts.
//
// NOTE: the underscorejs.org library names its most public identifier of all with a leading
// underscore. In fact, it's just a single underscore character, all by itself. However, it's
// obvious that the underscore object is meant for public access because that's what it's for.
// They chose `_` just as jQuery chose `$` because it's short and abstract in meaning. We know
// it's meant to be public because they say so in their documentation.

// Create a function in the global scope. Every JS script will see it because it's global.
// At least we can flag privacy by the naming convention.
function _dontWorryAboutThis(){
  // Build a "comma-separated value" string of book names in the format `Title with Spaces by Author Name`
  // Any `,` or ` by ` is guaranteed to be a delimeter, not part of a book title or author.
  // Some books have multiple authors separated by the word `and`.
  var _bookCsv = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge"
    +", Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford"
    +", Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman"
    +", A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr"
    +", The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes"
    +", The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens"
    +", Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth"
    +", Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert"
    +", Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov"
    +", The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene"
    +", Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon"
    +", Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes"
    +", Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome"
    +", Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester"
    +", L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell"
    +", Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin"
    +", Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch"
    +", Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec"
    +", La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym"
    +", Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth"
    +", The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe"
    +", Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett"
    +", The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark"
    +", The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy"
    +", Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray"
    +", Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout"
    +", The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh"
    +", Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon"
    +", Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse"
    +", Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse"
    ;
  // These above vars are in scope {global}{_dontWorryAboutThis} so they can't be seen by everything.
  var _bookStore = [];
  var _books = _bookCsv.split(',');
  var _categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];
  // FIXME: is this really the best example of underscore privacy-flagging convention?

  // Given a CSV element from the _bookCsv string, build a book object and return it.
  // (rememeber the thing that gets returned is a *reference* to the object)
  function _createBook(bookName){
    var bookComponents = bookName.split(' by '); // Don't choke on "Gatsby by F. Scott"
    return {
      title: bookComponents[0].trim(),
      author: bookComponents[1].trim(),
      price: Math.floor(Math.random()*2000) / 100,          // 0.00 .. 19.99
      category: _categories[Math.floor(Math.random()*5)]
    };
  }

  // Given an array of book descriptor strings which follows the format
  //  [ "Title of Book with Spaces by Author Name and Optional Second Author Name" , ...]
  //  build a new book object for each string in the argument array, appending that
  //  object directly to the array _bookstore listed in {global}{_dontWorryAboutThis}
  //  scope which is a subset of {global}{_dontWorryAboutThis}{_createBookStore} scope.
  //  After appending these new book objects to _bookStore array, return _bookStore
  //  array. Again, remember the arrays, strings, and other objects are stored in
  //  variables and passed around as function arguments and return values by reference
  //  (little pointers) not by value (big data structures).
  function _createBookStore(arr) {
    for (var i = 0; i < arr.length; i++) {
      _bookStore.push(_createBook(arr[i]));
    }
    return _bookStore;
  }
  // Return entire catalog [{title:"example",author:"ex",price:27.41,category:"self help"}, ...]
  return _createBookStore(_booksArray);
}

// On the previous lines, the leading undescores flag the outside world (which possibly
// means you) that they oughtta look but don't touch. Or better yet, don't even look.
// They mess with those variables and properties at their own peril and it's a waste
// of effort to figure out what they do. They shouldn't rely on that code staying put.
// Whoever wrote it (possibly you) can freely use them and refactor them all they want
// without having to care about breaking code out in the world that some idiot wrote to
// do some fancy whizbang thing to the guts of your machine. Not your problem.

// Occasionally, you will use the leading underscore naming convention for a global
// variable. This is good as a reminder to yourself that the variable is global on
// purpose. Consider this code:
//            function doSomethingAcrossArray(arr) {
//              for (i = 0; i < arr.length; i++) {
//                doSomething(i);
//              }
//            }
// JavaScript thinks the most reasonable interpretation is that you're trying to
// litter the global namespace with your array iterator variable `i` and you'd like
// to keep it hanging around with the number `arr.length` until the end of time, or
// until browser refresh. If you agree, you should write your code like this:
//            function doSomethingAcrossArray(arr) {
//              for (_i = 0; _i < arr.length; _i++) {
//                doSomething(_i);
//              }
//            }
// That way, you'll flag to anyone reading your code that you didn't just forget your
// `var` statement. So long as nobody else has the brilliant idea to use the name
// `_i` as a global variable, you'll be golden. The length of the array most recently
// passed to doSomethingAcrossArray() will be lovingly preserved for you between
// calls to your function.
//
// But the primary use of the leading underscore convention is for properties in an object.
// Some of your properties are meant to be the API of your object. (application programming
// interface -- the blender buttons that human and robot chefs are meant to fiddle with),
// while others are meant to be the internal guts, so your object can function. Since you
// can't seal them away as truly private code, you do the next best thing, you flag your
// intention in the property names you choose. Then they know where to put their greasy paws.

// This function generates and returns a JavaScript object that represents a bookstore
// shopper for code-testing purposes. The user will have a balance (positive means
// the user has a spending credit) and an empty shopping cart.
function testUser(){
  return {
    balance: Math.floor(Math.random()*10000+13000) / 100, // 130.00 .. 229.99
    cart: [],
  };
}

// Build the bookstore catalog as an array of book objects.
var BookStore = _dontWorryAboutThis();
// Create a user for testing purposes.
var Susan = testUser();
console.log(Susan);

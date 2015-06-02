#Array Exercises Week 2

## User Network

Our User, Joey Plain has just signed up for Facebook! He's very excited and wants to start building out his network as quickly as possible - and we're going to help him get started.

Don't mess with the first hundred lines or so. They are used to create Joey's user object (joeyProfile) and the network of all twenty-seven users on the entire Facebook world (allUsers). We're going to use allUsers to help him find his friends, family, and coworkers.

1. Let's inspect joeyProfile and allUsers to see what we have.
  (i) console.dir the joeyProfile object. It should have a friends, family, and coworkers arrays.
  (ii) console.dir the allUsers collection. It should have at least twenty objects, all with the same property names as your joeyProfile object, and various property values.

2. Add some friends to the empty joeyProfile friends collection.
  (i) Loop through the allUsers array. On each iteration, we'll have a single user object.
  (ii) If a user in the allUsers array is from the same city as joeyProfile, push the username into the joeyProfile friends array.

3. Add some coworkers to the empty joeyProfile coworkers collection.
  (i) Loop through the allUsers array.
  (ii) If a user in the allUsers array has the same job as Joey, push the username into the joeyProfile coworker array.

4. Add some family members to the empty joeyProfile family collection.
  (i) Loop through the allUsers array.
  (ii) If a user in the allUsers array has the same last name, push the username into the joeyProfile family array.
    **You'll have to do something special to check JUST the last name. Check out the split() function.**

5. Remove duplicate usernames in our friends and family arrays. For example, if 'Doug Flutie' is in our family array, that user shouldn't be in our friends array. If it is, let's delete it from our friends array, as family is more important to Joey.
  (i) Create a loop nested within another loop. The outer loop walks the family array. The inner loop walks the friends array. What's the execution flow pattern? While the outer loop visits a family member, the inner loop
  traverses the entire friends array, comparing the slow-changing family member against the fast-changing friend.
  (ii) Inside the inner loop, put some code that will, if a duplicate is found, somehow excise the user from the frieds array wherever it occurs (beginning, middle or end) leaving closing up the space it was occupying. Be sure to keep the user listed in the family array. There are a couple of ways to delete things from an array. Look up Array.splice() and try to use that.

6. Now let's make sure there aren't any duplicate usernames in our friends and coworkers arrays. For example, if 'Doug Flutie' is in our friends array, it shouldn't be in our coworkers array. If it is, it should be deleted from coworkers, as friends are more important to Joey.
  (i) Use a nested loop similar to what we did for section 5, removing duplicates from coworkers, not friends.
  (ii) If the value of the current element inside of our coworkers array is equal to the current element of our friends array, excise the element from our coworkers array.

7. Sections 5 and 6 don't quite catch every duplicate from the three arrays. Can you figure out what we missed?
  (i) Either follow the patter established by sections 5 and 6, or combine all three into one somehow, such the code prevents duplicates, giving priority to family over friends and friends over coworkers. Create any code that gets the job done correctly and makes sense to you.
  (ii) Understand, really understand, that whatever you came up with can always be re-written to be cognitively easier, to run faster, to use less memory, or perhaps all three of these advantages and more that you never thought of. This is the essence of technological evolution. Your work can always be improved upon by you or someone else. Getting something to run correctly is job one. Making it better is job two. Budget your resources as an engineer.

YOU ARE NOW ENTERING NIGHTMARE MODE

8. Now that we have all of our arrays filled, let's sort each array alphabetically.
  (i) Create a function called nameSort that takes an array and sorts its contents A to Z. **hint: arrays may already have a method that does this.**
  (ii) Use nameSort on each array in our joeyProfile object.
  (iii) Check each array by using console.dir to make sure its contents are sorted when you expect them to be.

9. Joey wants to be able to instantly look up whether someone is in one of his networks.
  (i) Create a function, networkCheck, that takes an array and a name and returns boolean true if a user by that name is present in the array.
  (ii) Make a prompt box pop up asking the user for the name of a friend they'd like to add to one of Joey's networks.
  (iii) Check that the name is really used by one of the dozens of Facebook members. If not, prompt the user for all the info needed to create a new user object.
  (iv) Verify the name isn't already a member of a superseding or same Joey list according to the rules described in section 5, 6, 7.
  (v) If all that checks out, add that (new or previously existing) user to the appropriate Joey network.

10. Refactor the code from section 5, 6, and 7 to use the new networkCheck method. This should simplify your code
  to be conceptually easier to understand by converting chunks of in-line code into calls to our named and described function. Better. But it can *always* be better still.

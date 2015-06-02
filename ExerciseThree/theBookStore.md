#Bookstore Application!

You've been called up as CTO of the hottest new app on the market, The Book Store. TBS's mission is to be the most comprehensive BookStore on the planet - but it needs some extra functionality to get it started. Over the next hours, you will build that functionality and make this application run.

This lesson will test your knowledge of building functions and methods. In bookStoreApp.js there are two functions that create your fully-loaded book store and a testUser. The testUser should have a balance and a cart. The balance represents how much money the test user has to spend on books. The cart holds the books that the user is interested in buying.

Susan, our test user, is a college grad looking for some good reads. Let's first make sure she can quickly and efficiently look up things in our bookStore.

1. Create a function, checkStore, that takes a string as a parameter.
  checkStore goes through our bookStore and checks each book title.
  If the title is not found, alert the user that it wasn't listed in the catalog.
  If the title is found, ask the user whether to add it to the cart.
  Your prompt should look like this:
  ```
    We found your book! [Title of Book], by [Name of Author].   $[price]

    Would you like to add it to your cart?
  ```

2. Create a method `deleteBook` in your testUser object.
  (i) have it take a string parameter.
  (ii) write the code to checks the string against the user's cart.
  (iii) If it's found in the cart, use Window.confirm() to ask for user confirmation.
  (iv) remove the book from the cart.
  (v) Inspect the cart to verify the book is gone.

3. Create a method, `clearCart` in your testUser object.
  (i) clearCart confirms that the user is sure they mean to clear the entire cart.
  (ii) If user affirms, remove everything in the cart.
  (iii) Inspect the cart to verify it's empty.

4. Create a method, checkOut, and put it on your testUser object.
  (i) checkOut totals the price of the books in the cart.
  (ii) If the total does not exceed the balance, let them check out.
  ```
  checkout() ---> "You've successfully checked out."

  ```
  (iii) For an insufficient balance, tell them to get their money up and try again later (be nice about it).
  (iv) Does your code work in all cases? What if the balance is exactly equal to total. What if they checkout an empty cart? Programmers call these "edge cases". Get in the habit of thinking of a few.

YOU ARE NOW ENTERING HARD MODE

5. Let's open up our functionality a bit so Susan can more easily find books.
  (i) Instead of just checking for the title, let's let our testUser look up books by author and type of book as well.
  (ii) If there are multiple titles by the same author, or multiple books of the same type, send the user a prompt that lists the books like so:
  ```
  checkStore('classic');
  --> There are 3 classics. Which would you like?
    1. When Things Fall Apart by Chenua Achebe
    2. Moby Dick by Herman Melville
    3. I Know Why The Cagebird Sings by Maya Angelou
  ```
  (iii) Let the user enter the book title or item number they want to put in the cart.
  (iv) Inspect the cart to be sure the right book was inserted.

6. Susan is balling on a budget! Let's allow our user to delete multiple books by their price.
  (i) If the user passes a number as an argument to our deleteBook function, return all the books at or above that price point.
  (ii) Present the user a listing similar to the one described by section 5.
  (iii) Get user input and if it matches one of the books, take it out of the cart.
  (iv) Inspect the cart to verify it has what you think it should have.

- MORE COMPLEX FUNCTIONALITY: CREDIT CARD INFORMATION PROCESSING (ASK ALBREY ABOUT THIS).
>>>>>>> 8f34a31a1e2c5e489f3c9c74b21d1bf724a3d50f

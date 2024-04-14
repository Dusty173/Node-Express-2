### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
      A JSON Web Token is a JSON object that we can authenticate and hold non-security information in.

- What is the signature portion of the JWT?  What does it do?
    The signature portion of a JWT is the final/third part of the JWT that holds info on the version of the header and payload, and is signed with a secret key, and if any information has been changed, it fails authorization.

- If a JWT is intercepted, can the attacker see what's inside the payload?
    Yes, they can see whats inside the payload, but their ability to manipulate/change or use the token is taken away due to how the token is signed.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
    It can be implemented on certain routes we want protected, we would have a user sign up or go through some form of authentication, so that a JWT token can be sent to their browser, that way anytime they make a new request, we can validate that token before anything is sent back to them. You would validate this by creating a middleware folder/file (for security/ease of maintenance) that takes the token from the req.body, checks to make sure token is valid. this would have a try/catch that either takes the payload and returns the data with next(), or catches the error BUT only returns an 'empty' next(), we don't send the error that is thrown when a token fails auth to a user. Then you would export this function(s) from this file and use it in any route that requires authentication. Note that this function would need to be the second parameter (just after the '/') of your router.get() as well as ensuring we app.use it in our app as well.


- Compare and contrast unit, integration and end-to-end tests.
    UNIT: Testing one piece of code for expected behavior (including errors)

    INTEGRATION: Testing multiple interconnected pieces of code for expected behavior (including errors)

    END TO END: Testing a full application, every piece, as well as flow and all functionality.

- What is a mock? What are some things you would mock?
    A mock is similar to a beforeEach (in my opinion), where we set up variables/values that are expected (or not expected) into a function so that we can verify behavior. This would be good for something like a UNIT test, possible in certain cases for a INTEGRATION test.

- What is continuous integration?
    The act of merging in small code changes frequently. instead of a bunch of large changes all at once.


- What is an environment variable and what are they used for?
    Environment variables are values that can store important data, they're used for setting up/configuring an app, such as setting the database and types of environment ie production/development/testing.

- What is TDD? What are some benefits and drawbacks?
    Test Driven Development: 
        Benefits: 
          Planning code ahead of time, good architecture/only code needed to pass test is written, maintainability increased.
        Cons:
          Development is slower to start, Hard to apply to existing codebases, Challenging to learn.

- What is the value of using JSONSchema for validation?
    Its standardized, meaning we can use it across multiple applications as long as its setup for it.

- What are some ways to decide which code to test?
    We can decide by: 
      Does this code have any possibility of unintended input data being passed in?
      Can a user break this in any way?
      Can a bad actor access this and cause damage?
      Can we pass NO data to this and get a positive result?
      Are we getting the correct Errors? and are we making sure sensitive info is not being shown in these errors?

- What does `RETURNING` do in SQL? When would you use it?
    Retrieves the values from any INSERT,UPDATE,or DELETE statements. It's used so we can pass the data back and verify exactly what was INSERT,UPDATE,or DELETEd in the database.


- What are some differences between Web Sockets and HTTP?
    HTTP closes connection once its task is complete, WebSockets maintain a persistent connection.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

    I don't prefer one over the other, I think Flask was slightly easier to understand, but I like and want to get better with both.
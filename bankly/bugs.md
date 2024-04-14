BUG #1: routes/auth.js POST/login not `await`ing User.authenticate, fixed.

BUG #2: routes/users.js DELETE does not `await` User.delete, fixed.

BUG #3: models/user.js get() checking if user exists, did not `throw` a new ExpressError if none found, fixed.

BUG #4: models/user.js getAll() was being passed username and password but they aren't being used, removed unused parameters.

BUG #5: Getting a list of users returns mor info than we would like. Fixed to only return username, first_name, last_name.

BUG #6: middleware/auth.js was not verifying the token, changed jwt.decode to jwt.verify and passed in the `SECRET_KEY`.

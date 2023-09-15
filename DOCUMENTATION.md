# Description
This is a REST API that provides five major endpoints for CRUD operations on a 
Person resource. All returned data is in JSON and errors are returned in the
format {"msg": <error_message>}. The endpoints and their associated request
methods are listed as follows. (Note that user_id can be passed in any case.
And that names are always returned in title case.)

* GET "hngx-izu-2.onrender.com/api": Returns a JSON array of Person resources.
* POST "hngx-izu-2.onrender.com/api": This endpoint cretes a Person instance and returns it.
The request body should be in the application/json MIME type and should be in
the format {"name": "A name"}.
* GET "hngx-izu-2.onrender.com/api/user_id": The user_id parameter should a name, which we
take as "A Name", for example. The format for retrieving a Person object
matching  "A Name" would be a GET request to "HNG-izu-2/api/a-name". This
* POST "hngx-izu-2/api/user_id": Continuing with the previous example, sending
a POST request to "HNG-izu-2.onrender.com/api/a-name" with a body in the format {"user_id":
"a new name"} would update the Person instance matching "a name" and return
the updated Person instance.
* DELETE "hngx-izu-2.onrender.com/api/user_id": A DELETE request to "HNGx-izu2/api/a-name"
would delete the Person instance matching "a name" from the database.
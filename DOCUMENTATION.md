# Description
This is a REST API that provides five major endpoints for CRUD operations on a 
Person resource. All returned data is in JSON and errors are returned in the
format {"msg": <error_message>}. The endpoints and their associated request
methods are listed as follows. (Note that user_id can be passed in any case;
names are always returned in title case. Also, a returned instance (denoted by
personInstance below is in the format {"_id": "instance id", "name": "instance
name"}.) 

* GET https://hngx-izu-2.onrender.com/api: Returns a JSON array of Person instances
in the format {persons: [...personInstances]}.
* POST https://hngx-izu-2.onrender.com/api: This endpoint creates a Person instance
and returns it in the format {"person": <personInstance>}.
The request body should be in the application/json MIME type and should be in
the format {"name": "A name"}.
* GET https://hngx-izu-2.onrender.com/api/{user_id}: The user_id parameter should a
name, which we take as "A Name", for example. The format for retrieving a
Person instance matching  "A Name" would be a GET request to
  https://hngx-izu-2.onrender.com/api/a-name. This returns a Person instance, if there is one, in the format {"person":
personInstance}.
* POST https://hngx-izu-2.onrender.com/api/{user_id}: Continuing with the previous example, sending
a POST request to "https://hngx-izu-2.onrender.com/api/a-name" with a body in the format
{"name": "a new name"} would update the Person instance matching "a name" and
return the updated Person instance in the format {"person": personInstance}.
* DELETE https://hngx-izu-2.onrender.com/api/{user_id}: A DELETE request to "https://hngx-izu-2/api/a-name"
would delete the Person instance matching "a name" from the database and return it in the format {"person": personInstance}.

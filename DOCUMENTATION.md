# Description
This is a REST API built with NodeJS and ExpressJS that provides endpoints
for CRUD operations on a Person resource.

The main endpoint is hosted at https://hngx-izu-2.onrender.com/api but can be
setup locally, too. More on that in this document.

# A note on errors
Errors are returned in the format `{"msg": "error message"}`. For example,
trying to get a person that doesn't exist returns {"msg": "Person with name
'\<passedName\>' doesn't exist"}.

# Using the hosted API
Note that the user_id parameter can be passed in any case, but names are always
returned in title case. Also, a returned instance (denoted by `personInstance`
below) is in the format `{"_id": "instance id", "name": "Instance Name"}`.

## Creating a Person instance
* Endpoint: https://hngx-izu-2.onrender.com/api
* Request type: POST
* Request headers: Content-Type: application/json
* Request body structure: {"name": name}
* Response body: {"person": createdPerson}

Example: Sending a POST request to https://hngx-izu-2.onrender.com/api with the
body {"name": "new person"} returns a response {"_id": \<generatedId\>,
"name": "New Person"}

## Getting all Person instances
* Endpoint: https://hngx-izu-2.onrender.com/api
* Request type: GET
* Response body: {"person": arrayOfCreatedPersons}

Example: Assuming we've created a Person instance as in the last example,
sending a GET request to https://hngx-izu-2.onrender.com/api  returns a response {"persons": [{"_id": generatedId,
"name": "New Person"}]

## Getting a Person instance
* Endpoint: https://hngx-izu-2.onrender.com/api/{user_id}
* Request type: GET
* Request body structure: {"name": name}
* Response body: {"person": matchingPerson}

Example: Following previous examples, a GET request to 
https://hngx-izu-2.onrender.com/api/new-person returns a response {"person": {"_id": generatedId,
"name": "New Person"}}

(Note that the user_id parameter is passed with hyphens separating names (i.e.
new-person).)

## Updating a Person instance
* Endpoint: https://hngx-izu-2.onrender.com/api/{user_id}
* Request type: POST
* Request headers: Content-Type: application/json
* Request body structure: {"name": name}
* Response body: {"person": createdPerson}

Example: Sending a POST request to
https://hngx-izu-2.onrender.com/api/new-person with the body {"name": "changed person"} 
returns a response {"person": {"_id": generatedId, "name": "Changed Person"}}.


## Deleting a Person instance
* Endpoint: https://hngx-izu-2.onrender.com/api/{user_id}
* Request type: POST
* Response body: {"person": deletedPerson}

Example: Following the previous example, sending a DELETE request to
https://hngx-izu-2.onrender.com/api/created-person returns a response
{"person": {"_id": generatedId, "name": "New Person"}} representing the
deleted Person instance.

# Local Setup
If you have NodeJS installed on your machine, you can setup this project
locally by cloning this repository and running
```
npm install
```
to install all dependencies in the package.json file.

You then have to create a ``.env` file in the root project directory and set
MONGO_URI=mongodb+srv://\<username\>:\<password\>@\<clusterName\>.5lwo08o.mongodb.net/\<dbName\>?retryWrites=true&w=majority

* `<username>`: Username for user with access to your database.
* `<password>`: The user's password.
* `<clusterName>`: The name of your MongoDB cluster.
* `<dbName>`: The name of your MongoDB database.

You can then launch the application with
```
npm start
```
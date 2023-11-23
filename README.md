# Badge API

This API provides endpoints for managing badges.

## Get Badge by Name

Get information about a badge by providing its name.

### Request

```http
    GET /api/badges/:name
```
    Parameters
```
    name (string): The name of the badge.
```
    Response
```
    Success (200 OK)
```
```json
{
  "status": "OK",
  "id": "badge123"
}
Not Found (404)
json
Copy code
{
  "status": "NOT FOUND",
  "id": false
}
Server Error (500)
json
Copy code
{
  "status": "ERROR",
  "id": null
}
Add a New Badge
Add a new badge to the system.

Request
http
Copy code
POST /api/badges
json
Copy code
{
  "name": "NewBadge",
  "id": "newbadge123"
}
Response
Created (201)
json
Copy code
{
  "status": "CREATED",
  "message": "Badge added successfully"
}
Bad Request (400)
json
Copy code
{
  "status": "BAD REQUEST",
  "message": "Invalid data for adding badge"
}
Update a Badge by ID
Update the information of a badge by providing its ID.

Request
http
Copy code
PUT /api/badges/:id
json
Copy code
{
  "name": "UpdatedBadge",
  "id": "updatedbadge123"
}
Response
Updated (200)
json
Copy code
{
  "status": "UPDATED",
  "message": "Badge updated successfully"
}
Not Found (404)
json
Copy code
{
  "status": "NOT FOUND",
  "message": "Badge not found"
}
Bad Request (400)
json
Copy code
{
  "status": "BAD REQUEST",
  "message": "Invalid data for updating badge"
}
Delete a Badge by ID
Delete a badge by providing its ID.

Request
http
Copy code
DELETE /api/badges/:id
Response
Deleted (200)
json
Copy code
{
  "status": "DELETED",
  "message": "Badge deleted successfully"
}
Not Found (404)
json
Copy code
{
  "status": "NOT FOUND",
  "message": "Badge not found"
}
Running the Server
To run the server, execute the following command:

bash
Copy code
npm start
The server will start on port 80.
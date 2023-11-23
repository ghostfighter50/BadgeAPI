
# Badge API

This API provides endpoints for managing badges.

# Get Badge by Name

Get information about a badge by providing its name.

### Request Example

```http
GET /api/badges/:id
```
#### Parameters
id (**string**): The id of the badge.

### Response Example

  
**Success (200 OK)**

```json
{
"status" "OK",
"id": "badge123"
}
```
**Not Found (404)**

```json
{
"status": "NOT FOUND",
"id": false
}
```
**Server Error (500)**

```json
{
"status": "ERROR",
"id": null
}
```
  
## Add a New Badge

Add a new badge to the system.

### Request Example
```http
POST /api/badges
```
```json
{
"name": "NewBadge",
"id": "newbadge123"
}
```
### Response Example

**Created (201)**

```json
{
"status": "CREATED",
"message": "Badge added successfully"
}
```
**Bad Request (400)**

```json
{
"status": "BAD REQUEST",
"message": "Invalid data for adding badge"
}
```
  
## Delete a Badge by ID

Delete a badge by providing its ID.

### Request Example

  

```http
DELETE /api/badges/:id
```
### Response Example

**Deleted (200)**

```json
{
"status": "DELETED",
"message": "Badge deleted successfully"
}
```
**Not Found (404)**
```json
{
"status": "NOT FOUND",
"message": "Badge not found"
}
```
## Installing and setting up the Server
To install and set upthe server, execute the following command:
```bash
git clone https://github.com/ghostfighter50/BadgeAPI
```
```bash
npm install
```
```bash
npm start
```
## Running the Server
To run the server, execute the following command:
```bash
npm start
```

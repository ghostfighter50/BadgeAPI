# Badge API

This simple Node.js/TypeScript/Express API provides endpoints for managing RFID badges.

- [Get Badge by ID](#get-badge-by-id)
- [Add a New Badge](#add-a-new-badge)
- [Delete a Badge by ID](#delete-a-badge-by-id)
- [Installing and Setting Up the Server](#installing-and-setting-up-the-server)
- [Running the Server](#running-the-server)

# Get Badge by Id

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
"status": "OK",
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
**Server Error (500)**

```json
{
"status": "ERROR",
"id": null
}
```
## Delete a Badge by ID

Delete a badge by providing its ID.

### Request Example

  

```http
DELETE /api/badges/:id
```
### Response Example
#### Parameters
id (**string**): The id of the badge.

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
**Server Error (500)**

```json
{
"status": "ERROR",
"id": null
}
```
## Installing and setting up the Server
To install and set up the server, execute the following command:
```bash
git clone https://github.com/ghostfighter50/BadgeAPI
```
```bash
cd BadgeAPI
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

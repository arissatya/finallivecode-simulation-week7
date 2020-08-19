# hacktivInventory-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /inventories`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```
​

### GET /inventories

description: 
  get all inventories data

Request:

- headers: access_token

Response:

- status: 200
- body:

```json
[
  {
    "id": 1,
    "name": "Apple Mac Mini 2018 MRTR2 Space Grey Quad Core i3 SSD 128 GB",
    "price": 12990000,
    "quantity": 20,
    "status": "Bagus",
    "UserId": 1
  },
  {
    "id": 2,
    "name": "led Monitor Acer Eb192Q",
    "price": 825000,
    "quantity": 20,
    "status": "Bagus",
    "UserId": 1
  },
]
```

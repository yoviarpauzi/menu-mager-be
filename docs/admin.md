# Admin API Spec

## Login Admin API

Endpoint : POST /api/admin/login

Request Body :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "email": "example@gmail.com",
    "password": "secret12345"
  }
}
```

Response Body Success :

```json
{
  "status": "success",
  "message": "login successfully!",
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "status": "fail",
  "message": "email or password is incorrect!"
}
```

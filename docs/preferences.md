# Preference API Spec

## Create preference API

Endpoint : POST /api/preference

Request Body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "multipart/form-data"
  },
  "body": {
    "name": "example",
    "photo": "example.jpg"
  }
}
```

Response body success:

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success add preferences!",
    "data": {
      "id": 1,
      "name": "example",
      "photo": "example.jpg"
    }
  }
}
```

Response body error:

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "fail",
    "message": "preferences already exists!"
  }
}
```

## Update preference API

Endpoint : PUT /api/preference/:id

Request body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "multipart/form-data"
  },
  "body": {
    "name": "example",
    "photo": "example.jpg"
  }
}
```

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success update preferences!",
    "data": {
      "id": 1,
      "name": "example",
      "photo": "example.jpg"
    }
  }
}
```

Response body error :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "fail",
    "message": "preferences not found!"
  }
}
```

## Remove preference API

Endpoint : DELETE /api/preference/:id

Request body:

```json
{
  "header": {
    "Authorization": "Bearer <token>"
  }
}
```

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success remove preferences!",
    "data": {
      "id": 1,
      "name": "example",
      "photo": "example.jpg"
    }
  }
}
```

Response body error :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "fail",
    "message": "preferences not found!"
  }
}
```

## Get detail preference API

Endpoint : GET /api/preference/:id

Request body:

```json
{
  "header": {
    "Authorization": "Bearer <token>"
  }
}
```

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success get detail preferences!",
    "data": {
      "id": 1,
      "name": "example",
      "photo": "example.jpg",
      "recipe_preferences": [
        {
          "recipe": {
            "id": "unique-id",
            "name": "example",
            "photo": "example.jpg",
            "description": "example"
          }
        }
      ]
    }
  }
}
```

Response body error :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "fail",
    "message": "preferences not found!"
  }
}
```
## Get all preference API

Endpoint : GET /api/preference

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success get all preferences!",
    "data": [
      {
        "id": 1, 
        "name": "example",
        "photo": "example.jpg"
      }
    ]
  }
}
```



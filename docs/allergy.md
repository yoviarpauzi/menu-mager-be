# Allergy API Spec

## Create allergy API

Endpoint : POST /api/allergy

Request Body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "name": "example"
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
    "message": "success add allergy!",
    "data": {
      "id": 1,
      "name": "example"
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
    "message": "allergy already exists!"
  }
}
```

## Update allergy API

Endpoint : PUT /api/allergy/:id

Request body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "name": "example"
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
    "message": "success update allergy!",
    "data": {
      "id": 1,
      "name": "example"
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
    "message": "allergy not found!"
  }
}
```

## Remove allergy API

Endpoint : DELETE /api/allergy/:id

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
    "message": "success remove allergy!",
    "data": {
      "id": 1,
      "name": "example"
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
    "message": "allergy not found!"
  }
}
```

## Get detail allergy API

Endpoint : GET /api/allergy/:id

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
      "recipe_allergy": [
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
    "message": "allergy not found!"
  }
}
```

## Get all allergy API

Endpoint : GET /api/allergy

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success get all allergy!",
    "data": [
      {
        "id": 1,
        "name": "example"
      }
    ]
  }
}
```

# Material API Spec

## Create material API

Endpoint : POST /api/material

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
    "message": "success add material!",
    "data": {
      "id": "unique-id",
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
    "message": "material already exists!"
  }
}
```

## Update material API

Endpoint : PUT /api/material/:id

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
    "message": "success update material!",
    "data": {
      "id": "unique-id",
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
    "message": "material not found!"
  }
}
```

## Remove material API

Endpoint : DELETE /api/material/:id

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
    "message": "success remove material!",
    "data": {
      "id": "unique-id",
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
    "message": "material not found!"
  }
}
```

## Get detail material API

Endpoint : GET /api/material/:id

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
    "message": "success get detail material!",
    "data": {
      "id": "unique-id",
      "name": "example",
      "photo": "example.jpg",
      "recipe_material": [
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
    "message": "material not found!"
  }
}
```
## Get all material API

Endpoint : GET /api/material

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success get all material!",
    "data": [
      {
        "id": "unique-id", 
        "name": "example",
        "photo": "example.jpg"
      }
    ]
  }
}
```



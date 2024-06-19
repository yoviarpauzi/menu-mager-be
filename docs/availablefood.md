# Available Food API Spec

## Create available food API

Endpoint : POST /api/availablefood

Request Body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "startDate": "2024-06-07T05:41:19.323Z",
    "recipe": [
      {
        "name": "example"
      }
    ]
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
    "message": "success add available food!",
    "data": {
      "id": "unique-id",
      "start_date": "2024-06-07T05:41:19.323Z",
      "end_date": "2024-06-07T05:41:19.323Z",
      "available_food_recipe": [
        {
          "recipe": {
            "id": "unique-id",
            "name": "example",
            "description": "example",
            "photo": "example.jpg"
          }
        }
      ]
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
    "message": "available food for this date range already exists!!"
  }
}
```

## Update available food API

Endpoint : PUT /api/availablefood/:id

Request body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "startDate": "2024-06-07T05:41:19.323Z",
    "recipe": [
      {
        "name": "example"
      }
    ]
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
    "message": "success update available food!",
    "data": {
      "id": "unique-id",
      "start_date": "2024-06-07T05:41:19.323Z",
      "end_date": "2024-06-07T05:41:19.323Z",
      "available_food_recipe": [
        {
          "recipe": {
            "id": "unique-id",
            "name": "example",
            "description": "example",
            "photo": "example.jpg"
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
    "message": "available food not found!"
  }
}
```

## Remove available food API

Endpoint : DELETE /api/availablefood/:id

Request body:

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
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
    "message": "success remove available food!",
    "data": {
      "id": "unique-id",
      "start_date": "2024-06-07T05:41:19.323Z",
      "end_date": "2024-06-07T05:41:19.323Z",
      "available_food_recipe": [
        {
          "recipe": {
            "id": "unique-id",
            "name": "example",
            "description": "example",
            "photo": "example.jpg"
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
    "message": "available food not found!"
  }
}
```

## Get detail available food API

Endpoint : GET /api/availablefood/:id

Request body:

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
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
    "message": "success get detail available food!",
    "data": {
      "id": "unique-id",
      "start_date": "2024-06-07T05:41:19.323Z",
      "end_date": "2024-06-07T05:41:19.323Z",
      "available_food_recipe": [
        {
          "recipe": {
            "id": "unique-id",
            "name": "example",
            "description": "example",
            "photo": "example.jpg"
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
## Get all available food API

Endpoint : GET /api/availablefood

Response body success :

```json
{
  "header": {
    "Content-type": "application/json"
  },
  "body": {
    "status": "success",
    "message": "success get all available food!",
    "data": [
      {
        "id": "unique-id",
        "start_date": "2024-06-07T05:41:19.323Z",
        "end_date": "2024-06-07T05:41:19.323Z"
      }
    ]
  }
}
```



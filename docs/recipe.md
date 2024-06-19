# Recipe API Spec

## Create recipe API

Endpoint : POST /api/recipe

Request Body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "multipart/form-data"
  },
  "body": {
    "name": "example",
    "description": "example",
    "photo": "example.jpg",
    "preferences": [
      {
        "name": "example"
      }
    ],
    "allergy": [
      {
        "name": "example"
      }
    ], 
    "instruction": [
      {
        "description": "example"
      }
    ],
    "material": [
      {
        "name": "name",
        "amount": 2,
        "unit": "example"
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
    "message": "success add preferences!",
    "data": {
      "id": "unique-id",
      "name": "example",
      "photo": "example.jpg",
      "description": "example",
      "recipe_preferences": [
        {
          "preferences": 
            {
              "id": 1,
              "name": "example",
              "photo": "example.jpg"
            }
        }
      ],
      "recipe_allergy": [
        {
        "allergy": 
            {
              "id": 1,
              "name": "example"
            }
        }
      ],
      "recipe_instruction": [
        {
          "instruction":  {
            "description": "example"
          }
        }
      ],
      "recipe_material": [
        {
          "material": {
            "id": "unique-id",
            "name": "example",
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
    "message": "recipe already exists!"
  }
}
```

## Update recipe API

Endpoint : PUT /api/recipe/:id

Request body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "multipart/form-data"
  },
  "body": {
    "name": "example",
    "description": "example",
    "photo": "example.jpg",
    "preferences": [
      {
        "name": "example"
      }
    ],
    "allergy": [
      {
        "name": "example"
      }
    ],
    "instruction": [
      {
        "step": 1,
        "description": "example"
      }
    ],
    "material": [
      {
        "name": "name",
        "amount": 2,
        "unit": "example"
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
    "message": "success update preferences!",
    "data": {
      "id": "unique-id",
      "name": "example",
      "photo": "example.jpg",
      "description": "example",
      "recipe_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ],
      "recipe_allergy": [
        {
          "allergy": {
            "id": 1,
            "name": "example"
          }
        }
      ],
      "recipe_instruction": [
        {
          "instruction": {
            "step": 1,
            "description": "example"
          }
        }
      ],
      "recipe_material": [
        {
          "material": {
            "id": "unique-id",
            "name": "example",
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
    "message": "recipe not found!"
  }
}
```

## Remove recipe API

Endpoint : DELETE /api/recipe/:id

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
    "message": "success remove recipe!",
    "data": {
      "id": "unique-id",
      "name": "example",
      "photo": "example.jpg",
      "description": "example",
      "recipe_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ],
      "recipe_allergy": [
        {
          "allergy": {
            "id": 1,
            "name": "example"
          }
        }
      ],
      "recipe_instruction": [
        {
          "instruction": {
            "step": 1,
            "description": "example"
          }
        }
      ],
      "recipe_material": [
        {
          "material": {
            "id": "unique-id",
            "name": "example",
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
    "message": "recipe not found!"
  }
}
```

## Get detail recipe API

Endpoint : GET /api/recipe/:id

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
    "message": "success get detail recipe!",
    "data": {
      "id": "unique-id",
      "name": "example",
      "photo": "example.jpg",
      "description": "example",
      "recipe_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ],
      "recipe_allergy": [
        {
          "allergy": {
            "id": 1,
            "name": "example"
          }
        }
      ],
      "recipe_instruction": [
        {
          "instruction": {
            "step": 1,
            "description": "example"
          }
        }
      ],
      "recipe_material": [
        {
          "material": {
            "id": "unique-id",
            "name": "example",
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
    "message": "recipe not found!"
  }
}
```
## Get all recipe API

Endpoint : GET /api/recipe

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
    "message": "success get all recipe!",
    "data": [
      {
        "id": "unique-id",
        "name": "example",
        "description": "example",
        "photo": "example.jpg"
      }
    ]
  }
}
```



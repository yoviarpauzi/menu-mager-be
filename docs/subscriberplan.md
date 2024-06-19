# Plan API Spec

## Create plan API

Endpoint : POST /api/plan

Request Body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "pricePerServing": 234523,
    "preferences": [
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
    "message": "success add subscriber plan!",
    "data": {
      "price_per_serving": 234238432,
      "subscription_plan_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ]
    }
  }
}
```

## Update plan API

Endpoint : PUT /api/plan

Request body :

```json
{
  "header": {
    "Authorization": "Bearer <token>",
    "Content-type": "application/json"
  },
  "body": {
    "pricePerServing": 234523,
    "preferences": [
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
    "message": "success update subscriber plan!",
    "data": {
      "price_per_serving": 234238432,
      "subscription_plan_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ]
    }
  }
}
```

## Get plan API

Endpoint : GET /api/plan

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
    "message": "success get subscriber plan!",
    "data": {
      "price_per_serving": 234238432,
      "subscription_plan_preferences": [
        {
          "preferences": {
            "id": 1,
            "name": "example",
            "photo": "example.jpg"
          }
        }
      ]
    }
  }
}
```



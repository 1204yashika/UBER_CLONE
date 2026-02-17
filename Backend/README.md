# User Registration API Documentation

## POST /user/register

### Description
This endpoint allows users to register for an account. It validates the provided credentials and creates a new user in the database after password hashing. Upon successful registration, the endpoint returns an authentication token and the newly created user object.

---

## Request

### Method
`POST`

### Endpoint
`/user/register`

### Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "fullname": {
    "firstName": "string (required, min: 3 characters)",
    "lastName": "string (optional, min: 3 characters if provided)"
  },
  "email": "string (required, must be valid email)",
  "password": "string (required, min: 6 characters)"
}
```

### Required Fields
- **fullname.firstName** - User's first name (minimum 3 characters)
- **email** - User's email address (must be a valid email format and unique in the database)
- **password** - User's password (minimum 6 characters)

### Optional Fields
- **fullname.lastName** - User's last name (minimum 3 characters if provided)

---

## Response

### Success Response (201 Created)
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

**Status Code:** `201 Created`

### Error Response (400 Bad Request)
Returns validation errors if required fields are missing or invalid.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 charecter long",
      "param": "fullname.firstName",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 charecter long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Status Code:** `400 Bad Request`

---

## Notes
- Passwords are hashed using bcrypt before being stored in the database
- The returned token can be used for authentication in subsequent requests
- Email addresses must be unique; attempting to register with an existing email will fail
- The password field will not be returned in the response for security reasons

---

---

# GET /users/profile

### Description
This endpoint returns the authenticated user's profile. It requires a valid JWT token either in the `Authorization` header (`Bearer <token>`) or in the `token` cookie. The auth middleware verifies the token and ensures it is not blacklisted.

---

## Request

### Method
`GET`

### Endpoint
`/users/profile`

### Headers
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Request Body
No body required.

### Required Authentication
- Valid JWT token in `Authorization` header or `token` cookie

---

## Response

### Success Response (200 OK)
```json
{
  "user": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returned when no token is provided, token is invalid, or token is blacklisted.

```json
{
  "message": "Access denied. No token provided."
}
```

**Status Code:** `401 Unauthorized`

---

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Profile returned successfully |
| `401` | Not authenticated or token invalid/blacklisted |
| `500` | Server error |

---

## Example Request

```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

---

## Notes
- Supports token in `Authorization` header or `token` cookie
- Tokens added to the blacklist (on logout) are rejected

---

# GET /users/logout

### Description
Logs out the authenticated user by clearing the `token` cookie and storing the token in a blacklist so it can no longer be used.

---

## Request

### Method
`GET`

### Endpoint
`/users/logout`

### Headers
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Request Body
No body required.

### Required Authentication
- Valid JWT token in `Authorization` header or `token` cookie

---

## Response

### Success Response (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returned when the user is not authenticated or token is invalid.

```json
{
  "message": "Access denied. No token provided."
}
```

**Status Code:** `401 Unauthorized`

---

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Logged out successfully |
| `401` | Not authenticated or token invalid/blacklisted |
| `500` | Server error |

---

## Example Request

```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

---

## Notes
- Logout clears the `token` cookie and writes the token to the blacklist
- Subsequent requests with the same token will be rejected
# POST /user/login

### Description
This endpoint allows existing users to log in to their account. It validates the provided email and password, and if both are correct, returns an authentication token and the user object. The password is compared against the hashed password stored in the database.

---

## Request

### Method
`POST`

### Endpoint
`/user/login`

### Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "email": "string (required, must be valid email)",
  "password": "string (required, min: 6 characters)"
}
```

### Required Fields
- **email** - User's email address (must be a valid email format)
- **password** - User's password (minimum 6 characters)

---

## Response

### Success Response (200 OK)
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returns an error message if email does not exist or password is incorrect.

```json
{
  "message": "Invalid email or password"
}
```

**Status Code:** `401 Unauthorized`

### Error Response (400 Bad Request)
Returns validation errors if required fields are missing or invalid.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 charecter long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Status Code:** `400 Bad Request`


---

## Notes
- The password comparison uses bcrypt for security
- The returned token can be used for authentication in subsequent requests
- Both email and password must be correct; generic error messages are used to prevent email enumeration
- The password field will not be returned in the response for security reasons
 
---

# POST /captain/register

### Description
Registers a new captain (driver). The endpoint validates captain details including vehicle information, creates the captain record, and returns an authentication token and the created captain object on success.

---

## Request

### Method
`POST`

### Endpoint
`/captain/register`

### Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "fullname": {
    "firstName": "string (required, min: 3 characters)",
    "lastName": "string (optional, min: 3 characters if provided)"
  },
  "email": "string (required, must be valid email)",
  "password": "string (required, min: 6 characters)",
  "vehicle": {
    "color": "string (required, min: 3 characters)",
    "plate": "string (required, min: 3 characters)",
    "capacity": "integer (required, min: 1)",
    "vehicleType": "string (required, one of: car, motorcycle, auto)"
  }
}
```

### Required Fields
- **fullname.firstName** - Captain's first name (minimum 3 characters)
- **email** - Captain's email (must be valid and unique)
- **password** - Password (minimum 6 characters)
- **vehicle.color** - Vehicle color (minimum 3 characters)
- **vehicle.plate** - Vehicle plate (minimum 3 characters)
- **vehicle.capacity** - Vehicle capacity (integer, minimum 1)
- **vehicle.vehicleType** - One of `car`, `motorcycle`, or `auto`

---

## Response

### Success Response (201 Created)
```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Status Code:** `201 Created`

### Error Response (400 Bad Request)
Returns validation errors when required fields are missing or invalid.

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "First name must be at least 3 charecter long", "param": "fullname.firstName", "location": "body" },
    { "msg": "Vehicle capacity must be at least 1", "param": "vehicle.capacity", "location": "body" }
  ]
}
```

**Status Code:** `400 Bad Request`

---

## Status Codes

| Code | Description |
|------|-------------|
| `201` | Captain successfully registered |
| `400` | Validation failed - invalid or missing required fields |
| `500` | Server error |

---

## Example Request

```bash
curl -X POST http://localhost:3000/captain/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstName": "Jane", "lastName": "Doe" },
    "email": "jane@example.com",
    "password": "password123",
    "vehicle": { "color": "red", "plate": "ABC123", "capacity": 4, "vehicleType": "car" }
  }'
```

---

## Notes
- Vehicle `vehicleType` must be one of `car`, `motorcycle`, or `auto`.
- All passwords are stored hashed; the password is not returned in responses.
- Attempting to register with an existing email will return a `400` error.

---

# POST /captain/login

### Description
This endpoint allows captains (drivers) to log in to their account. It validates the provided email and password against the captain's stored credentials. Upon successful authentication, it returns an authentication token and the captain's profile information.

---

## Request

### Method
`POST`

### Endpoint
`/captain/login`

### Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "email": "string (required, must be valid email)",
  "password": "string (required, min: 6 characters)"
}
```

### Required Fields
- **email** - Captain's email address (must be a valid email format)
- **password** - Captain's password (minimum 6 characters)

---

## Response

### Success Response (200 OK)
```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returns an error message if email does not exist or password is incorrect.

```json
{
  "message": "Invalid email or password"
}
```

**Status Code:** `401 Unauthorized`

### Error Response (400 Bad Request)
Returns validation errors if required fields are missing or invalid.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 charecter long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Status Code:** `400 Bad Request`

---

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Captain successfully logged in |
| `400` | Validation failed - invalid or missing required fields |
| `401` | Invalid email or password |
| `500` | Server error |

---

## Example Request

```bash
curl -X POST http://localhost:3000/captain/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "password123"
  }'
```

---

## Notes
- The password comparison uses bcrypt for security
- The returned token can be used for authentication in subsequent requests
- Both email and password must be correct; generic error messages are used to prevent email enumeration
- The password field will not be returned in the response for security reasons

---

# GET /captain/profile

### Description
This endpoint returns the authenticated captain's profile. It requires a valid JWT token either in the `Authorization` header (`Bearer <token>`) or in the `token` cookie. The auth middleware verifies the token and ensures it is not blacklisted.

---

## Request

### Method
`GET`

### Endpoint
`/captain/profile`

### Headers
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Request Body
No body required.

### Required Authentication
- Valid JWT token in `Authorization` header or `token` cookie

---

## Response

### Success Response (200 OK)
```json
{
  "captain": {
    "_id": "mongodb_id",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returned when no token is provided, token is invalid, or token is blacklisted.

```json
{
  "message": "Access denied. No token provided."
}
```

**Status Code:** `401 Unauthorized`

---

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Profile returned successfully |
| `401` | Not authenticated or token invalid/blacklisted |
| `500` | Server error |

---

## Example Request

```bash
curl -X GET http://localhost:3000/captain/profile \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

---

## Notes
- Supports token in `Authorization` header or `token` cookie
- Tokens added to the blacklist (on logout) are rejected

---

# GET /captain/logout

### Description
Logs out the authenticated captain by clearing the `token` cookie and storing the token in a blacklist so it can no longer be used.

---

## Request

### Method
`GET`

### Endpoint
`/captain/logout`

### Headers
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Request Body
No body required.

### Required Authentication
- Valid JWT token in `Authorization` header or `token` cookie

---

## Response

### Success Response (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

**Status Code:** `200 OK`

### Error Response (401 Unauthorized)
Returned when the captain is not authenticated or token is invalid.

```json
{
  "message": "Access denied. No token provided."
}
```

**Status Code:** `401 Unauthorized`

---

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Logged out successfully |
| `401` | Not authenticated or token invalid/blacklisted |
| `500` | Server error |

---

## Example Request

```bash
curl -X GET http://localhost:3000/captain/logout \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

---

## Notes
- Logout clears the `token` cookie and writes the token to the blacklist
- Subsequent requests with the same token will be rejected


````



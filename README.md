# 2nd Hometask on FEWD Course

### Description

We should build project from scratch for react development. Our application should have ability to register user and login. For authorized users application should display secret persons. How to style and display elements is our choice, but all data comes from API should be displayed.

API is available as scratch server in /server/index.js. Just run it in terminal by `node /server/index.js`

Optional - try to setup route to display certain secret user by id (not for
bonus point)

### Requirements

- [x] Custom webpack config
- [x] Custom babel config
- [x] Routes for login and register
- [x] css-modules or styled-components
- [x] header with any png logo (logo should be bundled with webpack), title and links to login and register
- [x] footer with your innopolis email
- [x] http requests to given API
- [x] for authorized user display secret persons on home page
- [ ] [OPTIONAL] route for certain secret person with person description displayed

---

### Server API

`POST /register`
accepts login and password to create user

```
// Request
{
    "login": "string",
    "password": "string"
}
```

```
// Response
200 - if register succeded
(empty response)
400 - already exists error, login or password not present error
{
    "message": "string"
}
```

---

`POST /login`
validates user login and password, provide session token

```
// Request
{
    "login": "string",
    "password": "string"
}
```

```
// Response
200 - success
{
    "token": "string"
}
401 - invalid auth
{
    "message": "string"
}
```

---

`GET /info`
provide info of secret people, on each server start set of people is different

```
// Request
no params
Required "Authorization" header with session token

//Response
401 - invalid auth

200
[
    {
        "id": "string",
        "name": "string",
        "email": "string",
        "avatar": "string",
        "address": "string",
    }
]
```

---

`GET /info/:id`
Returns info about secret person with provided id

```
// Request
no params
Required "Authorization" header with session token

//Response
401 - invalid auth

404 - person not found

200
[
    {
        "id": "string",
        "name": "string",
        "email": "string",
        "avatar": "string",
        "address": "string",
        "description": "string"
    }
]
```

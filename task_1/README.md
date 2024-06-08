# Start
To start both services with postgres use:
```
docker compose up
```


# Users service

To start service locally (please check users_service/src/config.js to avoid possible errors)
```
cd users_service
npm start
```

### POST /api/user/register
Does user registration


|Name     |Required|Type  |Location|
|--------:|:------:|:----:|:------:|
|email    |required|string|body    |
|password |required|string|body    |
|firstName|required|string|body    |


#### Example
```
/api/user/register
{
    "email": "mail@mail.ru",
    "password": "password",
    "firstName": "admin"
}
```
#### 200 Ok
``` 
{
    "status": "ok",
    "msg": "Пользователь был успешно зарегистрирован"
}
```
#### 400 Error
```
{
    "status": "error",
    "msg": "Пользователь уже существует"
}
```

### POST /api/user/login
Gets access token


|Name     |Required|Type  |Location|
|--------:|:------:|:----:|:------:|
|email    |required|string|body    |
|password |required|string|body    |


#### Example
```
/api/user/login
{
    "email": "mail@mail.ru",
    "password": "password",
}
```
#### 200 Ok
``` 
{
    "status": "ok",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNzQ3MzM2OCwiZXhwIjoxNzE3NDc2OTY4fQ.CXMJuLny7N6l6SGpZUKKmK-ptfryTn-nQr_S3FNR-OY"
}
```
#### 404 Error
```
{
    "status": "error",
    "msg": "Пользователь не существует"
}
```

### GET /api/profiles/{user_id}
Gets profile info


|Name     |Required|Type  |Location|
|--------:|:------:|:----:|:------:|
|user_id  |required|int   |param   |


#### Example
```
/api/profiles/1
```
#### 200 Ok
``` 
{
    "id": 1,
    "firstName": "admin",
    "lastName": null,
    "email": "mail@mail.ru",
    "gender": null,
    "photo": null,
    "regDateTime": "2024-06-04T03:54:17.000Z"
}
```
#### 404 Error
```
{
    "status": "error",
    "msg": "Пользователь не существует"
}
```

### GET /api/profiles
Gets profiles info


|Name     |Required|Type  |Location|Default|
|--------:|:------:|:----:|:------:|:-----:|
|page     |optional|int   |query   |1      |


#### Example
```
/api/profiles?page=1
```
#### 200 Ok
``` 
{
    "status": "ok",
    "users": [
        {
            "id": 1,
            "firstName": "admin",
            "lastName": null,
            "email": "mail@mail.ru",
            "gender": null,
            "photo": null,
            "regDateTime": "2024-06-04T03:54:17.000Z"
        },
        {
            "id": 2,
            "firstName": "admin1",
            "lastName": null,
            "email": "mail1@mail.ru",
            "gender": null,
            "photo": null,
            "regDateTime": "2024-06-04T03:55:17.000Z"
        },
        {
            "id": 3,
            "firstName": "admin2",
            "lastName": null,
            "email": "mail2@mail.ru",
            "gender": null,
            "photo": null,
            "regDateTime": "2024-06-04T03:56:17.000Z"
        },
    ]
}
```

### PUT /api/profiles/{user_id}
Edits profile info


|Name         |Required|Type  |Location|
|------------:|:------:|:----:|:------:|
|user_id      |required|int   |param   |
|authorization|required|jwt   |header  |


#### Example
```
/api/profiles/1
{
    "lastName": "admin",
    "gender": "male",
}
```
#### 200 Ok
``` 
{
    "status": "ok",
    "msg": "Данные пользователя были успешно обновлены"
}
```
#### 404 Error
```
{
    "status": "error",
    "msg": "Пользователь не существует"
}
```

# Users Actions service
To start service locally (please check users_actions_service/src/config.ts to avoid possible errors)

Dev server
```
cd users_actions_service
npm run dev
```
Prod server
```
cd users_actions_service
npm start
```

### POST /api/actions
Create action


|Name         |Required|Type  |Location|
|------------:|:------:|:----:|:------:|
|user_id      |required|int   |body    |
|action_type  |required|enum: user-created, user-modified|body|

#### Example
```
/api/actions
{
    "user_id": 1,
    "action_type": "user-created",
}
```
#### 200 Ok
```
{
    "status": "ok",
    "msg": "Событие было успешно сохранено"
}
```
#### 400 Error
```
{
    "status": "error",
    "msg": "Не удалось сохранить событие"
}
```

### GET /api/actions
Get actions

|Name    |Required|Type  |Location|Default|
|-------:|:------:|:----:|:------:|:--_--:|
|user_id |optional|int   |query   |null   |
|page    |optional|int   |query   |1      |
|size    |optional|int   |query   |10     |

#### Example
```
/api/actions?user_id=1
```
#### 200 Ok
```
{
    "status": "ok",
    "actions": [
        {
            "type": "user-created",
            "user_id": 1
        }
    ]
}
```
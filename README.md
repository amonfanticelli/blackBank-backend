<h1 align ='center'> <strong>API Documentation<strong> </h1>

## **1. Overview**

Main technologies used in this project:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

<br>

## **2. Endpoints**

### Index

- [Users](#1-users)
- [Accounts](#2-accounts)
- [Transactions](#3-transactions)

<br>

## **1.** **USERS**

[Back to Endpoints](#2-endpoints)

<br>

The User object is defined as:

| Field    | Type   | Description              |
| -------- | ------ | ------------------------ |
| id       | string | User's unique identifier |
| username | string | User login               |
| password | string | User email               |

<br>

<br>

### **Endpoints**

<br>

| Method | Routes | Description     |
| ------ | ------ | --------------- |
| POST   | /users | Create user     |
| POST   | /login | Login with user |
| GET    | /users | List all users  |

---

<br>

## **1.1 User Creation**

[Back to Endpoints](#2-endpoints)

<br>

## POST `/users`

<br>

### **Request**:

- POST /users
- Host: http://localhost:3001
- Authorization: None
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "username": "joao123",
  "password": "A1234567"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "id": "688bfca5-ec99-4b8d-952a-bcf82b57a646",
  "username": "joao123",
  "password": "$2a$10$58Xe9WadCqbBVzZE1SducunKZLyJP4l0XW9eefb0dSaRt8nyFxCKm",
  "account": {
    "id": "45ef443b-e3bb-404f-93f9-2d56a64858f7",
    "balance": 100
  }
}
```

<br>

### **1.2 User Login**

[Back to Endpoints](#2-endpoints)

<br>

## POST `/login`

<br>

### **Request**:

- POST /login
- Host: http://localhost:3001
- Authorization: None
- Content-type: application/json
- User must be created before he can login

<br>

### **Request body**:

```json
{
  "username": "joao123",
  "password": "A1234567"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg3OTQyNjUsImV4cCI6MTY2ODg4MDY2NSwic3ViIjoiZjE1NGRjZTgtYWIxNi00ZmIxLWE0ZjgtYTllOTA5MmQ5ODVjIn0.Y3QQtNB2HO5mYItha3ibCajTvtZ0oJz6wZDS1sxNFwI"
}
```

<br>

### **1.3 List Users**

[Back to Endpoints](#2-endpoints)

<br>

## GET `/users`

<br>

### **Request**:

- GET /users
- Host: http://localhost:3001
- Authorization: Bearer Token
- Content-type: application/json
- Empty Body
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
[
	{
		"id": "a1e2422f-d3c1-481e-9c4a-5583160e7a9b",
		"username": "joao1",
		"password": "$2a$10$kyD/IMLXFWhds0sXDxaG9eDamd0Jxb0i/iNWLy0b.W91A0Stclv0C"
	},
	{
		"id": "bdb316dd-7598-48be-b166-8d4a1ca3aaf7",
		"username": "joao2",
		"password": "$2a$10$KBlchK8fz/B5Xlr4rcqiS.vSIUdJJOqsrx0VxcakR7iWn0.KhDhiS"
	},
    ...
]
```

<br>

## **2.** **Accounts**

[Back to Endpoints](#3-endpoints)

<br>

Account object is defined as:

| Field   | Type   | Description               |
| ------- | ------ | ------------------------- |
| id      | string | Account unique identifier |
| balance | number | User Account balance      |

<br>

### **Endpoints**

<br>

| Method | Routes    | Description       |
| ------ | --------- | ----------------- |
| GET    | /accounts | List user Account |

---

<br>

### **2.1 List user Account**

[Back to Endpoints](#2-endpoints)

<br>

## GET `/accounts`

<br>

### **Request**:

- GET /accounts
- Host: http://localhost:3001
- Authorization: Bearer Token
- Content-type: application/json
- Empty Body
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": "30714d50-ea6e-4338-8908-ef98e2263c65",
  "balance": 100
}
```

<br>

## **3.** **TRANSACTIONS**

[Back to Endpoints](#2-endpoints)

<br>

Transaction object is defined as:

| Field            | Type   | Description                           |
| ---------------- | ------ | ------------------------------------- |
| id               | string | Transaction unique identifier         |
| value            | number | Transaction Value                     |
| debitedAccount   | object | Contains debited user id and balance  |
| crediteddAccount | object | Contains credited user id and balance |
| createdAt        | string | Transaction date                      |

<br>

<br>

### **Endpoints**

<br>

| Method | Routes       | Description            |
| ------ | ------------ | ---------------------- |
| POST   | /transaction | Create Transaction     |
| GET    | /transaction | List user Transactions |

---

<br>

## **3.1 Transaction Creation**

[Back to Endpoints](#2-endpoints)

<br>

## POST `/transactions`

<br>

### **Request**:

- POST /transactions
- Host: http://localhost:3001
- Authorization: Bearer Token
- Content-type: application/json
- User must be Authenticated

<br>

### **Request body**:

```json
{
  "usernameCredited": "joao12",
  "value": 1
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "id": "289d1063-4045-4cd0-b80c-038a6356dd76",
  "value": 1,
  "debitedAccount": {
    "id": "45ef443b-e3bb-404f-93f9-2d56a64858f7",
    "balance": 96
  },
  "creditedAccount": {
    "id": "5577223b-807f-4e0b-8f47-b14afd8144f0",
    "balance": 108
  },
  "createdAt": "2022-11-18T16:43:27.084Z"
}
```

<br>

### **3.2 List Transactions**

[Back to Endpoints](#2-endpoints)

<br>

## GET `/transactions`

<br>

### **Request**:

- GET /transactions
- Host: http://localhost:3001
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
[
	{
		"id": "a8266574-e1b4-4158-a0d4-86853ffdf538",
		"value": 50,
		"createdAt": "2022-11-18T15:49:56.871Z",
		"type": "credited"
	},
	{
		"id": "7ec0421f-c890-46ca-8c8d-9a07ba998709",
		"value": 1,
		"createdAt": "2022-11-18T15:51:23.314Z",
		"type": "credited"
	},
    ...
]
```

<br>

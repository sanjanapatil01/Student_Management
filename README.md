


# School Management API

A RESTful API built with Node.js, Express.js, and MySQL to manage school data.  
The system allows users to add new schools and retrieve a list of schools sorted by proximity to a given location.

---

## Features

- Add new schools with location details
- Retrieve schools sorted by distance
- Input validation and error handling
- Clean MVC architecture
- Environment-based configuration

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv

---

## Project Structure

```

config/
controllers/
models/
routes/
app.js
package.json

```

---

## Getting Started

### Clone the Repository

```

git clone https://github.com/sanjanapatil01/Student_Management.git
cd Student_Management

```

---

### Install Dependencies

```

npm install

```

---

### Environment Variables

Create a `.env` file in the root directory:

```

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_db

```

---

### Database Setup

Run the following queries in MySQL:

```

CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);

```

---

### Run the Application

```

node app.js

```

Server will run at:

```

http://localhost:5000

```

---

## API Endpoints

### Add School

- Method: POST  
- Endpoint: `/api/addSchool`

Request Body:
```

{
"name": "ABC School",
"address": "Hyderabad",
"latitude": 17.385,
"longitude": 78.4867
}

```

Response:
```

{
"message": "School added successfully"
}

```

---

### List Schools

- Method: GET  
- Endpoint: `/api/listSchools`

Query Parameters:
```

latitude
longitude

```

Example:
```

/api/listSchools?latitude=17.385&longitude=78.4867

```

Response:
```

[
{
"id": 1,
"name": "ABC School",
"address": "Hyderabad",
"latitude": 17.385,
"longitude": 78.4867,
"distance": 0
}
]

```

---

## Postman Collection

Use the following Postman collection to test the APIs:

Postman Link:  
https://www.postman.com/warped-satellite-75408/workspace/student-management/collection/45041886-2d944cd4-76db-47fb-9be2-9d68deddfb4b?action=share&creator=45041886&active-environment=45041886-4eed05b4-f8d1-4ab9-bc82-331de3d9cd54

---

## Deployment

The API is deployed using platforms in Render.  


---


## Author

Sanjana Patil

---


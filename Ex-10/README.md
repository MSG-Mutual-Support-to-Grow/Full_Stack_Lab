# EX-10: Node JS Server Side Application with MongoDB Database

## Overview

**Exercise 10** is a complete Node.js server-side application that implements a user registration system with MongoDB database integration. This project demonstrates building a full-stack web application with server-side form processing, data validation, and database operations using modern web technologies.

The application allows users to:
- Register new users through an HTML form with comprehensive validation
- Store all registration data in a MongoDB database collection named "customers"
- View all registered users in a dynamic HTML table
- Validate all form inputs on the server side before saving to database
- Switch between registration form and customer details table views

## Objectives

1. **Server-Side Development**: Build an Express.js server running on port 6000
2. **Database Integration**: Connect to MongoDB and create Mongoose schemas for customer data
3. **Form Validation**: Implement comprehensive server-side validation using express-validator
4. **Data Persistence**: Store and retrieve user data from MongoDB
5. **Client-Side Interaction**: Use AJAX for form submission and dynamic data loading
6. **Error Handling**: Display validation errors and user-friendly messages
7. **RESTful Routes**: Implement POST for registration and GET for data retrieval

## Features

### User Registration Form
- **All 7 Fields Mandatory**: Name, Password, Age, Mobile Number, Email, Gender, State
- **HTML5 Form Validation**: Client-side validation with server-side backup
- **Real-time Error Messages**: Display validation errors on form submission
- **Form Reset**: Clear form after successful submission
- **Input Persistence**: Retain values on validation errors

### Data Validation
- **Name**: Non-empty string required
- **Password**: Non-empty string required
- **Age**: Integer between 1 and 120 years
- **Mobile Number**: 10-digit number validation
- **Email**: Valid email format with uniqueness check (no duplicates)
- **Gender**: Radio button selection (Male/Female required)
- **State**: Dropdown selection from list of Indian states

### Database Operations
- **Create**: New customer registration with validation
- **Read**: Retrieve all customers from database
- **Email Uniqueness**: Prevent duplicate email registrations
- **Data Persistence**: All data stored in MongoDB "ecommerce.customers" collection

### User Interface
- **Registration Form View**: Professional form layout with labels and inputs
- **Customer Details Table**: Dynamic table displaying all registered users
- **View Switching**: Links to toggle between form and table views
- **Error Display**: Red error box above form with specific error messages
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Password Masking**: Passwords displayed as bullets (•) in table

## Project Structure

```
Ex-10/
├── index.html              # Single-page HTML with form and table
├── server.js               # Express server with routes and MongoDB integration
├── package.json            # Project dependencies and scripts
├── README.md               # This documentation
├── style.css               # Root directory CSS (for reference)
└── public/
    └── style.css           # Styling for form and table views
```

## Installation & Setup

### 1. Install Dependencies

```bash
cd Ex-10
npm install
```

This installs:
- **express** (4.18.2): Web application framework
- **mongoose** (7.0.0): MongoDB object modeling
- **express-validator** (7.0.0): Server-side validation
- **body-parser** (1.20.2): Middleware for parsing request bodies
- **nodemon** (3.0.1): Development tool (optional)

### 2. Setup MongoDB

Ensure MongoDB is running:

```bash
# Windows - If MongoDB is installed locally
mongod

# Or use MongoDB Atlas (cloud database)
# Replace connection string in server.js with MongoDB Atlas URI
```

### 3. Start the Server

```bash
npm start
# or for development with auto-reload
npm run dev
```

Server will run at: **http://localhost:6000**

## How to Use

### Registration Process

1. **Open Application**: Navigate to http://localhost:6000
2. **Fill Registration Form**: 
   - Name: Enter your full name
   - Password: Enter a password
   - Age: Enter age (1-120)
   - Mobile Number: Enter 10-digit phone number
   - Email: Enter valid email address
   - Gender: Select Male or Female
   - State: Choose state from dropdown

3. **Submit Form**: Click "Submit" button
4. **View Results**:
   - If validation passes → Redirects to customer table
   - If validation fails → Shows errors above form

### View All Registered Users

- Click "View All User Details" link on form
- Displays table with all registered customers
- Shows: Name, Password (masked), Age, Mobile, Email, Gender, State
- Click "Back to Registration Form" to return to form

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | Latest LTS | Server runtime environment |
| Express.js | 4.18.2 | Web application framework |
| MongoDB | Latest | NoSQL database |
| Mongoose | 7.0.0 | MongoDB object modeling |
| Express-Validator | 7.0.0 | Server-side form validation |
| Body-Parser | 1.20.2 | Request body parsing |
| HTML5 | Latest | Form markup |
| CSS3 | Latest | Styling |
| JavaScript | ES6+ | Client-side interactivity |

## MongoDB Schema

### Database: ecommerce
### Collection: customers

```javascript
{
  _id: ObjectId,
  name: String (required),
  password: String (required),
  age: Number (required, 1-120),
  mobileNumber: String (required, 10 digits, pattern: /^[0-9]{10}$/),
  email: String (required, unique, valid email format),
  gender: String (enum: ['Male', 'Female'], required),
  state: String (required),
  createdAt: Date (default: current date/time)
}
```

## Server Routes

| Route | Method | Purpose | Response |
|-------|--------|---------|----------|
| `/` | GET | Display registration form and table | Serves index.html |
| `/save` | POST | Process form submission, save to DB | JSON success/error |
| `/api/customers` | GET | Retrieve all customers from DB | JSON array of customers |

### Route Details

#### POST /save
**Request Body**:
```json
{
  "name": "John David",
  "password": "password123",
  "age": 30,
  "mobileNumber": "9923457891",
  "email": "johndavid@gmail.com",
  "gender": "Male",
  "state": "Kerala"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Registration successful!"
}
```

**Error Response** (400):
```json
{
  "success": false,
  "errors": [
    { "msg": "Mobile number must be 10 digits" }
  ]
}
```

#### GET /api/customers
**Response** (200):
```json
{
  "success": true,
  "data": [
    {
      "_id": "ObjectId",
      "name": "John David",
      "password": "password123",
      "age": 30,
      "mobileNumber": "9923457891",
      "email": "johndavid@gmail.com",
      "gender": "Male",
      "state": "Kerala",
      "createdAt": "2025-11-06T00:00:00.000Z"
    }
  ]
}
```

## Validation Rules

| Field | Rule | Error Message |
|-------|------|----------------|
| Name | Non-empty | "Name is required" |
| Password | Non-empty | "Password is required" |
| Age | 1-120 | "Age must be between 1 and 120" |
| Mobile Number | 10 digits | "Mobile number must be 10 digits" |
| Email | Valid format | "Invalid email address" |
| Email | Unique | "Email already registered" |
| Gender | Male/Female | "Gender is required" |
| State | Non-empty | "State is required" |

## Client-Side JavaScript

### Form Submission Handler
- Collects form data on submit
- Validates all fields are filled
- Sends AJAX POST request to /save
- Handles success and error responses
- Displays errors or switches to table view

### Customer Table Display
- Fetches customers from /api/customers
- Masks passwords with bullet characters (•)
- Dynamically generates HTML table
- Shows "No customers" message if empty
- Allows switching between views

### View Management
- `showFormView()`: Display registration form
- `showTableView()`: Fetch and display customer table
- JavaScript event listeners for link clicks

## Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Form/Table Labels | Blue | #0052cc |
| Form/Table Headers | Blue | #0052cc |
| Required Indicator (*) | Red | #cc0000 |
| Error Messages | Red | #cc0000 |
| Input Background | Light Gray | #f5f5f5 |
| Page Background | Light Gray | #f5f5f5 |
| Card Background | White | #ffffff |
| Table Borders | Black | #000000 |

## Responsive Breakpoints

- **Desktop** (>900px): Full layout with 150px label column and 200px inputs
- **Tablet** (900px-768px): Adjusted spacing and input widths
- **Mobile** (<768px): Single column layout with full-width inputs
- **Small Mobile** (<480px): Compact table with adjusted font sizes

## Form Fields Explanation

1. **Name**: User's full name (text input, required)
2. **Password**: Secret password for user account (password input, required, masked as •••)
3. **Age**: User's age in years (number input, 1-120, required)
4. **Mobile Number**: 10-digit Indian phone number (tel input, required)
5. **Email**: User's email address (email input, required, must be unique)
6. **Gender**: Biological gender selection (radio buttons: Male/Female, required)
7. **State**: User's state of residence (dropdown, 28 Indian states, required)

## Error Handling

- **Validation Errors**: Displayed in red box above form with specific messages
- **Database Errors**: Caught and returned with user-friendly messages
- **Connection Errors**: Logged to console, server continues running
- **Duplicate Email**: Special validation prevents registering same email twice
- **Client-Side Errors**: AJAX error handling with console logging

## Learning Outcomes

After completing this exercise, you will understand:

1. **Node.js & Express**: Building server-side applications with routing
2. **MongoDB & Mongoose**: Database design, schemas, and CRUD operations
3. **Form Handling**: Processing HTML forms on server side
4. **Validation**: Server-side validation of user input using express-validator
5. **Error Handling**: Managing and displaying errors gracefully
6. **AJAX**: Asynchronous form submission without page reload
7. **RESTful APIs**: Building endpoints that follow REST principles
8. **Data Persistence**: Storing and retrieving data from NoSQL database
9. **Security**: Email uniqueness, input validation, password handling
10. **Full-Stack Development**: Integrating frontend and backend seamlessly
11. **Database Indexing**: Using unique indexes to prevent duplicates
12. **Client-Server Communication**: JSON data exchange between client and server

## Troubleshooting

### MongoDB Connection Error
**Problem**: "MongoDB Connection Error"
**Solution**: 
- Ensure MongoDB is running: `mongod`
- Check connection string in server.js
- Verify database "ecommerce" exists or will be created automatically
- If using MongoDB Atlas, update connection string with credentials

### Port 6000 Already in Use
**Problem**: "EADDRINUSE: address already in use :::6000"
**Solution**:
- Change PORT in server.js to another port (e.g., 5000, 3000)
- Or kill the process using port 6000: `netstat -ano | findstr :6000`

### Module Not Found Error
**Problem**: "Cannot find module 'express'"
**Solution**: Run `npm install` to install all dependencies

### Form Not Submitting
**Problem**: Form submit button doesn't work
**Solution**:
- Check browser console for JavaScript errors
- Ensure MongoDB is running and connected
- Verify all form fields are filled
- Check network tab in DevTools for failed requests

### Email Already Registered Error
**Problem**: "Email already registered" even though it's new
**Solution**:
- This is normal validation behavior
- Check if email was registered in previous session
- Clear MongoDB database if needed: `db.customers.deleteMany({})`

### Table Not Displaying
**Problem**: "No customers registered yet" on first click
**Solution**:
- Register a customer first by submitting the form
- Ensure MongoDB is saving data successfully
- Check browser console for AJAX errors

## Future Enhancements

1. **Security**: Add password encryption using bcryptjs
2. **Authentication**: Implement user login/logout with sessions
3. **Database**: Add edit and delete functionality for customers
4. **UI**: Implement pagination for large customer lists
5. **Search**: Add search and filter capabilities
6. **API**: Create REST API endpoints returning JSON
7. **Dashboard**: Build admin dashboard with statistics
8. **Files**: Implement file upload for profile pictures
9. **Email**: Add email verification for new registrations
10. **Logging**: Implement comprehensive request/error logging
11. **Testing**: Add unit and integration tests
12. **Deployment**: Deploy to cloud platform (Heroku, AWS, etc.)

## References

- [Express.js Official Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Express-Validator Guide](https://express-validator.github.io/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [JavaScript Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

## Notes

- This is a basic implementation for learning purposes
- Passwords are stored as plain text (not recommended for production)
- For production, implement password hashing using bcryptjs
- Use HTTPS in production to protect sensitive data
- Implement rate limiting to prevent abuse
- Add CORS headers if API is accessed from different domain

---

**Created**: 2025
**Type**: Full-Stack Web Application (Node.js + MongoDB)
**Difficulty**: Intermediate
**Technologies**: Node.js, Express.js, MongoDB, Mongoose, HTML5, CSS3, JavaScript (AJAX)
**Port**: 6000
**Database**: MongoDB (ecommerce collection: customers)

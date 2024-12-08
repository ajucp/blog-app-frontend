
# Blogging Application

Objective:

The Blogging Application is a fully functional and responsive platform that enables users to register, log in, and manage blogs. It features pagination, robust authentication using JWT, and a modern UI with a black-and-yellow theme.

## Tech Stack

**Frontend**: React.js with Tailwind CSS

**Backend**: Node.js with Express.js

**Database**: MongoDB atlas

**Authentication**: JWT

**Deployment**:  
- **Frontend URL**: [https://blog-app-frontend-otz9.onrender.com](https://blog-app-frontend-otz9.onrender.com)  
- **Backend URL**: [https://blog-app-backend-crav.onrender.com](https://blog-app-backend-crav.onrender.com)  

---
## Features

**Frontend**

**Responsive Design:** Optimized for desktop, tablet, and mobile devices.

**Pages:**

**Home Page:** Displays paginated blogs with title, snippet, author,   and date.

**Blog Details Page:** Shows the full blog content and options to edit or delete (if logged in as the author).

**Create/Edit Blog Page:** Form-based interface for creating and updating blogs.

**Login/Register Pages:** Secure forms for user authentication.

**Pagination:** Blogs are displayed 6 per page for efficient navigation.

**API Integration:** Interacts with backend APIs to fetch and manage data securely.

**Backend**

**RESTful APIs:** Handles user authentication and CRUD operations for blogs.

**JWT Authentication:** Secures protected routes.

**Password Security:** Passwords are hashed using bcrypt.

**Error Handling:** Graceful error responses for invalid inputs and server issues.


## **Setup Instructions**

### **Prerequisites**
- Node.js installed.  
- MongoDB database URL.  
- Environment variables configured.  

### **Steps**

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/ajucp/blog-app-frontend.git

 **Navigate to the project folder:**

- **Frontend:**
  ```bash
  cd frontend

- **Backend:**
  ```bash
  cd backend

**Install dependencies:**

```bash
npm install
```

**Configure environment variables:**

- **Backend**: Add `PORT`, `JWT_SECRET`, and `MONGODB_URI` in `.env`.  
- **Frontend**: Update `REACT_APP_API_URL` in `.env`.  

---

**Start the servers:**

- **Frontend:**
  ```bash
  npm start

- **Backend:**
  ```bash
  npm start

**Visit the application:**

Access the app at http://localhost:3000.

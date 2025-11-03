# 🍔 QuickBite – Food Ordering App

## Description
A MERN Stack Food Ordering Application that allows users to browse food items, select quantities and sizes, add them to a cart, and securely place orders.
The app features a responsive design, secure authentication, and dynamic UI interactions for a seamless user experience.

## ✨ Features
- 🍕 Dynamic Menu Display: Browse available food items with images, prices, and category filters.
- 🛒 Add to Cart: Select quantity and size; view real-time price updates.
- 👤 User Authentication: Secure login & registration using JWT tokens.
- 📦 Order Management: Place and manage orders easily with backend API support.
- 💻 Responsive UI: Works seamlessly across desktop and mobile screens.
- ⚙️ RESTful APIs: Built for scalability and smooth frontend-backend communication.

## 🧩 Tech Stack
- Frontend: React.js, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Token (JWT)
- Other Tools: Axios, Mongoose, Bcrypt

## Run Locally

**Clone the project**

```bash
git clone https://github.com/vishal499/food_app
```

**Install dependencies for backend**

```bash
cd backend
npm install
```

**Install dependencies for frontend**

```bash
cd ../frontend
npm install
```


**Start the backend server**

```bash
cd ../backend
nodemon .\index.js
```
**Start the frontend server**

```bash
cd ../frontend
npm start
```

## 🔐 Authentication Flow
- Users register with their email and password.

- On successful login, a JWT token is generated and stored securely.

- Protected routes ensure only authenticated users can access their cart or orders.

## 💡 Future Enhancements
- 🚚 Add delivery tracking feature.

- 🧾 Implement payment gateway integration.

- 🌐 Deploy app on cloud (e.g., Render / Vercel + MongoDB Atlas).

## Screenshots
  

![image alt](https://github.com/vishal499/food_app/blob/d877c7432585700a959179420fdd8e9608d24c5f/Screenshot%202025-11-03%20212014.png)
![image alt](https://github.com/vishal499/food_app/blob/a2233108decc4642e2de425b0fd0fcf0a5669f79/Screenshot%202025-11-03%20212024.png)
![image alt](https://github.com/vishal499/food_app/blob/d877c7432585700a959179420fdd8e9608d24c5f/Screenshot%202025-11-03%20212014.png)
![image alt](https://github.com/vishal499/food_app/blob/d877c7432585700a959179420fdd8e9608d24c5f/Screenshot%202025-11-03%20212014.png)
  

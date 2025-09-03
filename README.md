🛒 E-commerce Web Application

📌 Overview

This is a full-stack e-commerce platform developed as part of my internship at Zaalima Development. The project consists of three major components:

Client Application – A customer-facing platform where users can browse, search, and purchase products.

Admin Dashboard – A management panel for administrators to control products, users, and orders.

Backend API – A secure Node.js server that powers the client and admin apps.

The goal of this project was to design and implement a scalable, secure, and user-friendly e-commerce solution, deployed on the cloud using Render.

🚀 Live Demo

Client App: client-v2xl.onrender.com

Admin Dashboard: ecommerce-1-admin.onrender.com

Source Code: GitHub Repo

✨ Features
👤 Client Features

User registration and authentication (JWT).

Product browsing with categories, filters, and search.

Shopping cart with add/remove/update functions.

Checkout and order placement.

Order history and tracking.

🛠️ Admin Features

Secure admin login.

CRUD operations for products.

Manage customer accounts.

Order management and status updates.

Sales dashboard and analytics.

⚙️ Backend Features

RESTful APIs built with Node.js and Express.

JWT authentication and authorization.

Input validation and error handling.

MongoDB integration for data storage.

Modular and maintainable architecture.

🏗️ Tech Stack

Frontend (Client & Admin): React + Vite, Axios, TailwindCSS.

Backend: Node.js, Express.js.

Database: MongoDB (Mongoose ODM).

Authentication: JSON Web Tokens (JWT).

Deployment: Render (with render.yaml).

Version Control: Git + GitHub.

⚡ Installation

Clone the repository:

git clone https://github.com/rajeshkannakbd/Ecommerce.git
cd Ecommerce

1️⃣ Backend Setup
cd server
npm install
npm run dev

2️⃣ Client Setup
cd client
npm install
npm run dev

3️⃣ Admin Setup
cd admin
npm install
npm run dev


The apps will start on local servers (commonly at http://localhost:3000).

🛡️ Authentication

Users and admins authenticate via JWT tokens.

Protected routes ensure only logged-in users can access certain features.

Role-based access is implemented for admins.

🌐 Deployment

The project is deployed on Render Cloud with separate services for:

Client

Admin Dashboard

Backend API

Configuration is handled using render.yaml for automated builds.

📈 Future Enhancements

Integration with payment gateways (Stripe/PayPal).

Advanced product recommendations using AI/ML.

Real-time order notifications via email/SMS.

Mobile app support (React Native/Flutter).

Automated CI/CD pipelines for faster deployment.

🧑‍💻 Author

Rajesh Kanna N
Intern at Zaalima Development
GitHub: rajeshkannakbd

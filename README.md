# 🧡 CrowdSpark - A Simple Crowdfunding Web App

CrowdSpark is a full-stack web application where users can create crowdfunding campaigns, raise funds through Stripe, and post updates for their supporters.

## 🚀 Features
- ✅ User registration and login
- ✅ Create projects with goals
- ✅ View and fund projects
- ✅ Stripe payment integration
- ✅ Add project updates

## 🛠 Tech Stack
- Frontend: React, Axios
- Backend: Node.js, Express
- Database: MongoDB
- Payments: Stripe
- Auth: JWT

## 📦 How to Run Locally

### 1. Backend
```bash
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm start
.env (Backend)
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key

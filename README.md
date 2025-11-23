## Simplified Campaign Analytics Dashboard

### Overview

A simplified Campaign Analytics Dashboard built with: 
- **Frontend:** Next.js (TypeScript) + TailwindCSS 
- **Backend:** FastAPI (Python) 
- **Database:** PostgreSQL

The project demonstrates API integration, filtering, UI presentation, and deployment on Vercel + Railway.

---

## 🚀 Live Deployments

### **Frontend (Next.js + TailwindCSS)**
[🔗 Live Demo (Vercel)](https://campaign-analytics-dashboard-ivory.vercel.app/)

### **Backend (FastAPI)**
[🔗 Live (Railway)](https://campaign-analytics-dashboard-production-4906.up.railway.app)

---

## 📊 Features

### **Frontend**
- Built with **Next.js (App Router)** + **TailwindCSS**
- Campaign table showing:
  - Campaign Name
  - Status (Active/Paused)
  - Clicks
  - Cost
  - Impressions
- Status filter dropdown
- Includes **Dark Mode toggle**
- Fetches live data from FastAPI backend

### **Backend**
- FastAPI server with:
  - `/` health endpoint  
  - `/campaigns` → returns all campaigns
- Connected to PostgreSQL using SQLAlchemy ORM
- CORS enabled for frontend
- Deployed via Railway

### **Database**
- PostgreSQL hosted on Railway  
- Table: `campaigns`  
- Includes sample data via SQL seed file

---

## 🗄 SQL File

Database initialization and seed file is located at:

```
backend/app/init.sql
```

---

## 💻 Running the Project Locally

### 1️⃣ Clone the repository
```
git clone https://github.com/kriti-shesh321/Campaign-Analytics-Dashboard
cd Campaign-Analytics-Dashboard
```

---

## 🟦 Backend Setup (FastAPI)

```
cd backend
python3 -m venv venv
source venv/bin/activate     # venv\Scripts\activate for windows


pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:
```
http://localhost:8000
```

---

## 🟧 Frontend Setup (Next.js)

```
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:3000
```

---

## 🌐 Environment Variables

- Refer to the .env.example for both frontend and backend

---

## 🧪 API Endpoints

```
GET /          → Health check
GET /campaigns → Fetches all campaigns
```

---

## 🏁 Deployment

### Frontend  
- Hosted on **Vercel**  
- Automatically deploys on push to master  

### Backend  
- Hosted on **Railway**  
- Start command:
  ```
  uvicorn app.main:app --host 0.0.0.0 --port $PORT
  ```

---

## 📌 Notes
- Built for an internship assignment.
- Follows clean separation of backend + frontend.
- Includes light/dark UI theme.

---

## ✨ Author
**Kriti Shrivastav**

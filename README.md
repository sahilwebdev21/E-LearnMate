# 🎓 E-LearnMate – Full-Stack E-Learning Platform

> Developed as a BCA 6th Semester Final Project  
> Everest College, Thapathali, Kathmandu, Nepal  
> Affiliated to Tribhuvan University

---

## 🧑‍💻 Project Overview

**E-LearnMate** is a full-featured, full-stack e-learning platform designed to deliver high-quality online education. It allows students to browse and enroll in courses, watch video lectures, download resources, and earn certificates. Teachers can upload and manage their own courses, while the admin manages users, reviews, and payments.

This project is developed as part of the 6th semester requirement of BCA under Tribhuvan University.

---

## 👥 Team Members

- **Sahil** – Full Stack Developer & Project Lead  
- **Anita Chokhal** – UI/UX & Documentation

---

## 🛠️ Technologies Used

### Frontend:
- Next.js (React Framework) with App Router & TypeScript
- HTML, Plain CSS
- Axios (for API calls)

### Backend:
- Python 3
- Django
- Django REST Framework
- Simple JWT (for authentication)

### Database:
- PostgreSQL
- pgAdmin (for DB management)

### Other Tools:
- Git + GitHub
- Stripe (for course payments)
- VS Code
- ESLint
- Docker (optional for deployment)

---

## 🚀 Features

### 👨‍🎓 Student Features:
- Signup/Login
- Browse and preview courses
- Enroll in paid courses via Stripe
- Watch video lectures
- Track learning progress
- Download resources (PDFs)
- Get course completion certificates
- Leave course ratings and reviews
- Profile management

### 👩‍🏫 Teacher Features:
- Signup/Login
- Upload and manage courses
- Track enrolled students
- View earnings
- Edit/delete uploaded content

### 🛠️ Admin Features:
- Admin dashboard overview
- Approve teacher-uploaded content
- Manage students and teachers
- Delete/edit any course or user content
- View income reports
- Moderate ratings and reviews

---

## 💡 Premium / Optional Features
- Leaderboard & Badges
- Quizzes after lessons
- AI course suggestions
- Category-based course filtering
- Dark mode / Light mode toggle
- Notifications
- Downloadable certificate (with name & course)
- Social Login (Google/Facebook)

---

## 📁 Project Structure

```
/E-LearnMate
│
├── frontend/     → Next.js project (App Router, TS, CSS)
├── backend/      → Django project (DRF, PostgreSQL)
└── docs/         → Planning, wireframes, notes, presentations
```

---

## 📌 Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/sahilwebdev21/E-LearnMate.git
```

2. **Frontend setup:**
```bash
cd frontend
npm install
npm run dev
```

3. **Backend setup:**
```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

4. **PostgreSQL:**
- Create DB and user using pgAdmin or CLI
- Update `.env` file with your DB credentials (DB_NAME, USER, PASSWORD, HOST, PORT)

5. **Stripe:**
- Add your Stripe secret/public keys in the backend `.env`
- Make sure to configure webhook for payment success if needed

---

## 📜 License

This project is developed strictly for academic purposes. All intellectual rights belong to the developers.

---

## 📧 Contact

For any queries or feedback:

- Sahil – [sahilwebdev21@gmail.com](mailto:sahilwebdev21@gmail.com) / [GitHub: sahilwebdev21](https://github.com/sahilwebdev21)
- Anita Chokhal – [anitachokhal@gmail.com](mailto:anitachokhal@gmail.com) / [GitHub: anitachokhal](https://github.com/anitachokhal)


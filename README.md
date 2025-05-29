# E-LearnMate 📚✨ - Revolutionizing Online Learning

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Django REST framework](https://img.shields.io/badge/Django%20REST-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**E-LearnMate** is a modern, feature-rich, and user-friendly e-learning management system designed to provide a seamless learning experience for students, instructors, and administrators. This project is developed as part of the 6th-semester curriculum for the TU BCA faculty.

**Team Members:** Sahil Gupta & Anita Chokhal

---

## ✨ Features Overview

* **Interactive Homepage:** Engaging hero section, dynamic categories, featured courses, and instructor highlights.
* **Comprehensive Course Pages:** Detailed course information, filtering, sorting, and pagination.
* **User Roles:** Distinct experiences for Students, Instructors, and Admins.
* **Authentication:** Secure Login/Signup (Email/Password, Google, Facebook) with password recovery.
* **Course Management:** Create, read, update, and delete courses (Instructors & Admin).
* **Student Enrollment:** Easy course purchasing and access to free content.
* **Payment Integration:** Secure checkout system.
* **Instructor & Admin Earnings:** System for tracking and managing earnings.
* **Role-Based Dashboards:** Personalized dashboards for each user type.
* **Reviews & Ratings:** Allow students to review courses.
* **Gamification Elements:** To enhance student engagement.
* **AI-Powered Features:** Such as course recommendations.
* **Professional UI/UX:** Modern design with trending color palettes and fonts.
* **Wishlist & Cart Functionality**
* **And much more!**

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (with TypeScript, Tailwind CSS)
* **Backend:** Django + Django REST Framework (DRF)
* **Database:** PostgreSQL
* **Deployment:** (To be decided - e.g., Vercel for Frontend, Heroku/AWS for Backend)

---

## 📂 Project Structure

```

E-LearnMate/
├── backend/          \# Django + DRF project
│   ├── api/          \# DRF app for API endpoints (or integrated into other apps)
│   ├── core/         \# Django project settings, wsgi, asgi
│   ├── users/        \# User management app
│   ├── courses/      \# Courses, categories, enrollments, reviews app
│   ├── payments/     \# Payment integration app (optional)
│   ├── earnings/     \# Earnings tracking app (optional)
│   ├── manage.py
│   └── requirements.txt
├── frontend/         \# Next.js project
│   ├── src/
│   │   ├── app/          \# Next.js 13+ App Router
│   │   │   ├── (auth)/   \# Authentication pages (login, signup)
│   │   │   │   └── ...
│   │   │   ├── (dashboard)/ \# Role-based dashboards (admin, instructor, student)
│   │   │   │   └── ...
│   │   │   ├── (main)/   \# Main application pages
│   │   │   │   ├── courses/
│   │   │   │   │   └── [courseId]/
│   │   │   │   ├── categories/
│   │   │   │   ├── instructors/
│   │   │   │   ├── about/
│   │   │   │   ├── contact/
│   │   │   │   └── page.tsx  \# Homepage
│   │   │   └── layout.tsx
│   │   ├── components/   \# Shared UI components (Navbar, Footer, Cards, Forms, etc.)
│   │   ├── context/      \# React Context API (e.g., AuthContext)
│   │   ├── services/     \# API call functions
│   │   ├── styles/       \# Global styles, tailwind.config.ts
│   │   ├── lib/          \# Utility functions, helpers
│   │   └── types/        \# TypeScript type definitions
│   ├── public/       \# Static assets (images, fonts)
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   └── package.json
├── docs/             \# Project documentation, API docs (e.g., Swagger/OpenAPI)
├── others/           \# Design assets, mockups, research
└── README.md

````

---

## 🚀 Getting Started

**(Please fill this section with detailed setup instructions once your initial setup is stable.)**

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn
* Python (v3.9+ recommended)
* pip & venv
* PostgreSQL Server
* Git

### Backend Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd E-LearnMate/backend

# Create a virtual environment
python -m venv venv
# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup PostgreSQL database:
# 1. Ensure PostgreSQL is running.
# 2. Create a database (e.g., 'elearnmate_db').
# 3. Create a database user with privileges for this database.

# Create a .env file in the 'backend' directory (copy from .env.example if provided)
# and add your database credentials, SECRET_KEY, etc.
# Example .env content:
# SECRET_KEY='your_strong_secret_key'
# DEBUG=True
# DB_NAME='elearnmate_db'
# DB_USER='your_db_user'
# DB_PASSWORD='your_db_password'
# DB_HOST='localhost'
# DB_PORT='5432'

# Run database migrations
python manage.py migrate

# Create a superuser for accessing the Django admin panel
python manage.py createsuperuser

# Run the development server (default: [http://127.0.0.1:8000/](http://127.0.0.1:8000/))
python manage.py runserver
````

### Frontend Setup

```bash
# Navigate to the frontend directory from the project root
cd ../frontend

# Install dependencies
npm install
# or
# yarn install

# Create a .env.local file in the 'frontend' directory
# and add your API base URL.
# Example .env.local content:
# NEXT_PUBLIC_API_URL=[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)

# Run the development server (default: http://localhost:3000/)
npm run dev
# or
# yarn dev
```

-----

## 🎨 UI/UX Design

  * **Color Palette:** [e.g., Primary: \#4F46E5, Secondary: \#10B981, Accent: \#F59E0B. Link to Coolors/Adobe Color if available]
  * **Fonts:**
      * Headings: [e.g., Poppins, Montserrat]
      * Body: [e.g., Inter, Open Sans]
  * **Inspiration/Reference:** [Links to Dribbble, Behance, or other sites that inspire your design]

-----

## 🛣️ Project Roadmap & Progress

For a detailed day-by-day plan and progress tracking, please refer to our project management tools or internal documentation.
*(Optionally, link to a `ROADMAP.md` file or a Trello/Jira board if public)*

Key milestones include:

1.  Initial Setup & Frontend Foundation
2.  Backend Core Development (User, Course, Category APIs)
3.  Frontend-Backend Integration for Core Pages
4.  User Authentication & Authorization
5.  Role-Based Dashboards (Student, Instructor, Admin)
6.  Course Management & Enrollment Features
7.  Payment Integration
8.  Advanced Features (Reviews, Gamification, AI)
9.  Testing, Polishing & Deployment

-----

## 🧑‍💻 Developed By

  * **Sahil Gupta**
      * GitHub: `[Link to Sahil's GitHub Profile]`
      * LinkedIn: `[Link to Sahil's LinkedIn Profile]`
  * **Anita Chokhal**
      * GitHub: `[Link to Anita's GitHub Profile]`
      * LinkedIn: `[Link to Anita's LinkedIn Profile]`

-----

## 🎓 Assignment For

Tribhuvan University, Bachelor of Computer Application (BCA), 6th Semester Project.

Faculty of Humanities and Social Sciences.

-----

## 🙏 Acknowledgements

  * Our Project Supervisor and TU BCA Faculty for their guidance.
  * Contributors to the open-source libraries used in this project.

-----

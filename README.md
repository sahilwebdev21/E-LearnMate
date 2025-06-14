# 📘 E-LearnMate

A full-stack, modern **E-Learning Management System** built as a 6th Semester TU BCA project by **Sahil Gupta** and **Anita Chokhal**. E-LearnMate offers a professional platform where students can learn, instructors can teach, and admins can manage—all from one centralized system.

---

## 🛠 Tech Stack

### Frontend
- [Next.js 14 (App Router)](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- ESLint + Prettier

### Backend
- Django
- Django REST Framework (DRF)
- PostgreSQL
- JWT Authentication
- Stripe (for payments)

---

## 📁 Folder Structure

```

E-LearnMate/
├── frontend/   → Next.js App (App Router, TypeScript, Tailwind)
├── backend/    → Django + DRF API
├── docs/       → ERD, UI mockups, APIs, SRS, planning
└── others/     → Optional tools, backups, deploy files

```

---

## 👥 User Roles

1. **Student**
   - Browse, enroll in, and review courses
   - Wishlist and cart system
   - Gamification points
   - Role-based dashboard

2. **Instructor**
   - Apply to become instructor
   - Add/manage courses
   - View enrolled students
   - Track earnings

3. **Admin**
   - Approve instructors
   - Manage users and content
   - View reports and analytics

---

## ✨ Key Features

- ✅ Full Authentication (Login, Signup, Google/Facebook)
- ✅ Role-Based Dashboards (Student, Instructor, Admin)
- ✅ Courses, Categories, Instructor Profiles
- ✅ Course Detail Page (Preview, Reviews, Related)
- ✅ Wishlist and Cart System
- ✅ Stripe Payment Integration
- ✅ Gamification System (Points, Ranks)
- ✅ Reviews & Rating
- ✅ Become an Instructor (Approval Workflow)
- ✅ AI Integration (Smart Course Recommendation)
- ✅ Responsive UI & Professional Design

---

## 🌐 Pages

### 📌 Public Pages
- `/` → Home (Hero, categories, instructors, featured courses)
- `/courses` → All courses (filters, pagination)
- `/category` → Course categories
- `/instructor` → All instructors
- `/instructor/[id]` → Instructor detail & their courses
- `/about` → Project + Developer details
- `/contact` → Google map, address, contact form
- `/auth/login` + `/auth/signup` → Auth pages (toggle forms)

### 📌 Protected Pages
- `/courses/[id]` → Course detail page
- `/student/dashboard`
- `/instructor/dashboard`
- `/admin/dashboard`

---

## 🚀 Deployment

- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)
- Database: PostgreSQL (Render or Supabase)

---

## 📅 Project Timeline

This project was built in **30 days** following a strict roadmap:
- ✅ Week 1: Frontend UI design
- ✅ Week 2: Auth + API setup
- ✅ Week 3: Course system, reviews, gamification
- ✅ Week 4: Admin, payment, AI, deployment

---

## 👨‍💻 Developed By

### 👤 Sahil Gupta  
- 🔗 [LinkedIn](https://linkedin.com)  
- 🔗 [GitHub](https://github.com)  
- 📧 sahilwebdev21@gmail.com

### 👤 Anita Chokhal  
- 🔗 [LinkedIn](https://linkedin.com)  
- 🔗 [GitHub](https://github.com)  
- 📧 chokhalanita@gmail.com

---

## 📄 License

This project is for educational purposes as part of TU BCA 6th Semester Final Project.
```
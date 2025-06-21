# 🧠 E-LearnMate

## Your Gateway to Modern Learning

[](https://opensource.org/licenses/MIT)
[](https://www.typescriptlang.org/)
[](https://nextjs.org/)
[](https://laravel.com/)
[](https://www.postgresql.org/)

-----

## ✨ Overview

**E-LearnMate** is a comprehensive, full-stack e-learning platform designed to bridge the gap between eager students and passionate instructors. Inspired by leading platforms like Udemy and Coursera, E-LearnMate provides a robust, intuitive, and feature-rich environment for online education. From seamless course enrollment to advanced instructor tools and engaging gamification, we're building the next generation of digital learning.

-----

## 🚀 Features

E-LearnMate comes packed with powerful features for every user role:

### For Students:

  * **Intuitive Course Browse:** Discover courses by category, instructor, or search keywords.
  * **Flexible Enrollment:** Enroll in both free and paid courses.
  * **Secure Payments:** Seamless payment processing via **Stripe**.
  * **Personalized Dashboard:** Track progress, view purchased courses, and manage your learning journey.
  * **Engaging Gamification:** Earn points and badges as you learn, fostering motivation and friendly competition.
  * **Course Reviews:** Provide valuable feedback with star ratings and comments.

### For Instructors:

  * **Course Management:** Effortlessly add, edit, and delete your courses.
  * **Student & Earnings Tracking:** Monitor student enrollment and manage your revenue.
  * **Withdrawal System:** Conveniently withdraw your earnings from the platform.
  * **Review Management:** Engage with students by replying to their course reviews.

### For Administrators:

  * **Comprehensive Dashboard:** Full control over users, courses, and platform settings.
  * **User & Instructor Management:** Approve/block users, manage instructor applications, and maintain content quality.
  * **Analytics & Reporting:** Gain insights into platform performance and earnings.

-----

## 💡 Tech Stack

E-LearnMate is built with a modern, scalable, and robust technology stack:

  * **Frontend:** **Next.js (App Router)** with **TypeScript** for a fast, type-safe, and dynamic user experience.
  * **Styling:** **Tailwind CSS** combined with a **Trending UI (custom)** for a sleek, utility-first design.
  * **Backend:** **Laravel** for a powerful, expressive, and secure RESTful API layer.
  * **Database:** **PostgreSQL** for reliable and scalable data storage.
  * **Authentication:** Secure **Laravel Sanctum** (for SPA/API authentication) with **JWT** (or similar token-based approach) or **OAuth** (Google/Facebook coming soon).
  * **Payments:** **Stripe** integration for all financial transactions.
  * **Future Scope:** **OpenAI** integration for smart suggestions and an AI tutor.

-----

## 🧑‍🤝‍🧑 Team

  * **Sahil Gupta**
  * **Anita Chokhal**

-----

## 🏗️ Folder Structure

```
E-LearnMate/
├── frontend/             → Next.js application
├── backend/              → Laravel API
├── docs/                 → SRS, API docs, wireframes, database schema
└── others/               → (Optional) Deployment, analytics configurations
```

-----

## ⚙️ Getting Started

To get E-LearnMate up and running on your local machine, follow these steps:

### Prerequisites

  * Node.js (v18+)
  * PHP (v8.2+)
  * Composer
  * PostgreSQL
  * Git

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/E-LearnMate.git
cd E-LearnMate
```

### 2\. Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env      # Configure your database and app keys
php artisan key:generate
php artisan migrate
php artisan db:seed       # Optional: if you have seeders for initial data
php artisan serve
```

  * **Note:** For API authentication with Next.js, consider using [Laravel Sanctum](https://laravel.com/docs/master/sanctum) for token-based authentication.

### 3\. Frontend Setup (Next.js)

```bash
cd ../frontend
npm install
cp .env.local.example .env.local # Configure your backend API URL (e.g., NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api)
npm run dev
```

### 4\. Access the Application

  * **Frontend:** Open your browser and navigate to `http://localhost:3000`
  * **Backend API:** `http://localhost:8000/api/` (adjust as per your Laravel settings and API routes)

-----

## 🛣️ Roadmap & Future Enhancements

We are continuously working to enhance E-LearnMate with exciting new features:

  * **Quiz Module:** Integrated quizzes for course modules.
  * **Course Completion Certificates:** Automated certificate generation.
  * **Advanced Admin Analytics:** Comprehensive dashboards with charts and reports.
  * **Real-time Notifications:** Toasts and in-app updates using Laravel Echo/WebSockets.
  * **AI-Powered Tutor:** Smart suggestions and personalized learning assistance.

-----

## 🤝 Contributing

We welcome contributions\! If you'd like to contribute, please follow our [GitHub Guidelines](https://www.google.com/search?q=%23-github-guidelines) (to be detailed further in `docs/CONTRIBUTING.md`).

-----

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

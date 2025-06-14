# 📘 E-LearnMate: Modern E-Learning Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-000000?logo=next.js" alt="Next.js 14">
  <img src="https://img.shields.io/badge/Django-4.2-092E20?logo=django" alt="Django">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Stripe-Payments-008CDD?logo=stripe" alt="Stripe">
  <img src="https://img.shields.io/badge/Responsive-UI-4A154B" alt="Responsive UI">
</div>

![E-LearnMate Dashboard Preview](https://via.placeholder.com/800x400/4a154b/ffffff?text=E-LearnMate+Dashboard+Preview)

A full-stack **E-Learning Management System** developed as a 6th Semester TU BCA project by **Sahil Gupta** and **Anita Chokhal**. E-LearnMate provides a professional platform for students to learn, instructors to teach, and admins to manage content - all in one centralized system.

## 🌟 Key Features

| Category | Features |
|----------|----------|
| **Learning Experience** | Course enrollment, Gamification points, AI course recommendations, Reviews & ratings |
| **Teaching Tools** | Instructor applications, Course management, Student tracking, Earnings dashboard |
| **Admin Control** | User management, Content moderation, Analytics dashboard, Instructor approvals |
| **E-Commerce** | Wishlist system, Shopping cart, Stripe payments, Course previews |
| **Security** | JWT authentication, Role-based access, Google/Facebook login |

## 🧩 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Tools**: ESLint + Prettier

### Backend
- **Framework**: Django 4.2 + Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: JWT with Simple JWT
- **Payments**: Stripe API
- **AI Integration**: OpenAI API (course recommendations)

### Infrastructure
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **Database**: Supabase PostgreSQL
- **CI/CD**: GitHub Actions

## 🏗️ Project Structure

```bash
E-LearnMate/
├── frontend/           # Next.js 14 App (App Router)
│   ├── app/            # Route handlers, layouts Global CSS and Tailwind config
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility functions and API client
│   └── public/         # Static assets
│
├── backend/            # Django REST API
│   ├── config/         # Main Django project
│   ├── users/          # Custom user models and auth
│   ├── courses/        # Course management app
│   ├── payments/       # Stripe integration
│   └── manage.py       # Django management script
│
├── docs/               # Project documentation
    ├── ERD.pdf         # Database schema
    ├── SRS.md          # Software requirements
    └── wireframes/     # UI mockups
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Python 3.10+
- PostgreSQL 14+
- Stripe account

### Installation
```bash
# Clone repository
git clone https://github.com/sahilwebdev21/E-LearnMate.git
cd E-LearnMate

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Configuration
Create `.env` files with the following variables:

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Backend (.env):**
```env
SECRET_KEY=django-secret-key
DATABASE_URL=postgres://user:pass@localhost:5432/elearnmate
STRIPE_SECRET_KEY=sk_test_...
OPENAI_API_KEY=sk-...
```

### Running the Application
```bash
# Start backend server
cd backend
python manage.py migrate
python manage.py runserver

# Start frontend development server
cd ../frontend
npm run dev
```

## 🧭 Navigation Guide

| Page | Role | Description |
|------|------|-------------|
| **`/`** | Public | Homepage with featured content |
| **`/courses`** | Public | Browse all courses with filters |
| **`/courses/[id]`** | Student | Course detail page |
| **`/auth/login`** | Public | Authentication portal |
| **`/student/dashboard`** | Student | Learning dashboard and progress |
| **`/instructor/dashboard`** | Instructor | Course management and analytics |
| **`/admin/dashboard`** | Admin | System management console |

## 🛠️ Development Roadmap

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Frontend
    UI Design             :done,    des1, 2025-01-01, 7d
    Auth Implementation   :done,    des2, after des1, 5d
    Course System         :done,    des3, after des2, 8d
    Dashboard Development :done,    des4, after des3, 7d
    
    section Backend
    API Setup             :done,    des5, 2025-01-01, 5d
    Database Modeling     :done,    des6, after des5, 5d
    Payment Integration   :done,    des7, after des6, 5d
    AI Recommendations    :done,    des8, after des7, 5d
    
    section Deployment
    Testing               :active,  des9, 2025-01-25, 5d
    Production Deployment :         des10, after des9, 3d
```

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and ensure all tests pass before submitting PRs.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. Developed as part of the TU BCA 6th Semester curriculum.

---

## 👨‍💻 Developers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/sahilgupta21">
        <img src="https://via.placeholder.com/100/4a154b/ffffff?text=SG" width="100px;" alt="Sahil Gupta"/>
        <br />
        <sub><b>Sahil Gupta</b></sub>
      </a>
      <br />
      <a href="https://linkedin.com/in/sahilgupta21" title="LinkedIn">💼</a>
      <a href="mailto:sahilwebdev21@gmail.com" title="Email">✉</a>
    </td>
    <td align="center">
      <a href="https://github.com/anitachokhal">
        <img src="https://via.placeholder.com/100/4a154b/ffffff?text=AC" width="100px;" alt="Anita Chokhal"/>
        <br />
        <sub><b>Anita Chokhal</b></sub>
      </a>
      <br />
      <a href="https://linkedin.com/in/anitachokhal" title="LinkedIn">💼</a>
      <a href="mailto:chokhalanita@gmail.com" title="Email">✉</a>
    </td>
  </tr>
</table>

**Tribhuvan University**  
Bachelor of Computer Applications (BCA)  
6th Semester Project • June 2025

[![View Demo](https://img.shields.io/badge/View-Live_Demo-4a154b?style=for-the-badge)](https://elearnmate-demo.vercel.app)
[![Report Issue](https://img.shields.io/badge/Report-Issue-red?style=for-the-badge)](https://github.com/yourusername/E-LearnMate/issues)
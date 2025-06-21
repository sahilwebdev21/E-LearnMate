# 🧠 E-LearnMate: Your Gateway to Modern Learning

![E-LearnMate Banner](https://via.placeholder.com/1200x400) <!-- Replace with actual banner image -->

## ✨ Overview
E-LearnMate is a comprehensive, full-stack e-learning platform designed to bridge the gap between eager students and passionate instructors. Inspired by leading platforms like Udemy and Coursera, E-LearnMate provides a robust, intuitive, and feature-rich environment for online education.

## 🚀 Key Features

### For Students
- 🎓 Intuitive Course Browser with search and filtering
- 💳 Secure enrollment in free/paid courses (Stripe integration)
- 📊 Personalized learning dashboard
- 🏆 Gamification with points and badges
- ⭐ Course reviews and ratings system

### For Instructors
- 📝 Comprehensive course management tools
- 💰 Earnings tracking and withdrawal system
- 📈 Student progress analytics
- 💬 Review management and engagement

### For Administrators
- 👥 User and instructor management
- 🛡️ Content moderation system
- 📊 Advanced platform analytics
- ⚙️ System configuration controls

## 💡 Technology Stack

### Frontend
- Next.js (App Router) with TypeScript
- Tailwind CSS + Custom UI Components
- React Query for data fetching
- Formik & Yup for forms validation

### Backend
- Django & Django REST Framework (DRF)
- PostgreSQL database
- JWT Authentication
- Celery for async tasks

### Integrations
- Stripe for payments
- (Future) OpenAI for AI tutor features

## 🏗️ Project Structure

```
E-LearnMate/
├── frontend/             # Next.js application
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── app/              # Next.js app router structure
│   └── ...               
├── backend/              # Django project
│   ├── elearnmate/       # Django project config
│   ├── accounts/         # User auth app
│   ├── courses/          # Courses management app
│   └── ...               
├── docs/                 # Documentation
└── ...
```

## ⚙️ Installation Guide

### Prerequisites
- Node.js v18+
- Python 3.9+
- PostgreSQL
- Git

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend Setup
```bash
cd ../frontend
npm install

# Configure environment
cp .env.local.example .env.local
# Set your backend API URL

npm run dev
```

## 🌐 Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/
- Admin Panel: http://localhost:8000/admin/

## 🛣️ Roadmap
- [ ] Quiz and assessment module
- [ ] Course completion certificates
- [ ] Real-time notifications
- [ ] AI-powered tutor integration
- [ ] Mobile app development

## 👥 Team
- Sahil Gupta ([@sahilgupta](https://github.com/sahilwebdev21))
- Anita Chokhal ([@anitachokhal](https://github.com/anitachokhal))

## 🤝 Contributing
We welcome contributions! Please read our [Contribution Guidelines](docs/CONTRIBUTING.md) before submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

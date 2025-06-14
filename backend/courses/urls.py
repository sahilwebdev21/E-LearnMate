from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, CourseViewSet, InstructorProfileViewSet, InstructorViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'instructors', InstructorProfileViewSet)
router.register('instructors', InstructorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

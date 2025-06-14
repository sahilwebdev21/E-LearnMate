from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, CourseViewSet, InstructorProfileViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'instructors', InstructorProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

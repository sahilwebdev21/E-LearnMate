from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet
from .views import CourseViewSet, CategoryViewSet

router = DefaultRouter()
router.register('courses', CourseViewSet, basename='courses')
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
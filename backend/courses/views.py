from rest_framework import viewsets
from .models import Course, Category, InstructorProfile
from .serializers import CourseSerializer, CategorySerializer, InstructorProfileSerializer
from .serializers import InstructorSerializer, InstructorDetailSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class InstructorProfileViewSet(viewsets.ModelViewSet):
    queryset = InstructorProfile.objects.all()
    serializer_class = InstructorProfileSerializer

class InstructorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = InstructorProfile.objects.all()
    serializer_class = InstructorSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return InstructorDetailSerializer
        return super().get_serializer_class()
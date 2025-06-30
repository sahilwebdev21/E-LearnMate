from rest_framework import viewsets, permissions
from .models import Course
from .serializers import CourseSerializer
from .permissions import IsInstructorOrReadOnly

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('-created_at')
    serializer_class = CourseSerializer

def get_permissions(self):
    if self.action in ['create', 'update', 'partial_update', 'destroy']:
        return [IsInstructorOrReadOnly()]
    return [permissions.AllowAny()]

def perform_create(self, serializer):
    serializer.save(instructor=self.request.user)

def get_queryset(self):
    user = self.request.user
    if user.is_authenticated and user.role == 'INSTRUCTOR':
        return Course.objects.filter(instructor=user)
    return Course.objects.filter(is_published=True)

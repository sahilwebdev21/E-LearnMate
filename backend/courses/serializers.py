from rest_framework import serializers
from .models import Category, Course, InstructorProfile

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class InstructorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstructorProfile
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    instructor = InstructorProfileSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstructorProfile
        fields = ['id', 'user', 'bio', 'image']

class InstructorDetailSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True, source="course_set")

    class Meta:
        model = InstructorProfile
        fields = ['id', 'user', 'bio', 'image', 'courses']
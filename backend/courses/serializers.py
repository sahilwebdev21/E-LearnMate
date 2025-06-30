from rest_framework import serializers
from .models import Course, Category
from users.models import CustomUser

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'slug', 'description']

class CourseSerializer(serializers.ModelSerializer):
    instructor = serializers.StringRelatedField(read_only=True)
    category = CategorySerializer(read_only=True)
    category_id = serializers.UUIDField(write_only=True)

class Meta:
    model = Course
    fields = [
        'id', 'title', 'description', 'slug', 'price',
        'is_published', 'created_at', 'instructor',
        'category', 'category_id', 'level'
    ]

def create(self, validated_data):
    category_id = validated_data.pop('category_id')
    category = Category.objects.get(id=category_id)
    return Course.objects.create(category=category, **validated_data)

def update(self, instance, validated_data):
    category_id = validated_data.pop('category_id', None)
    if category_id:
        instance.category = Category.objects.get(id=category_id)
    return super().update(instance, validated_data)
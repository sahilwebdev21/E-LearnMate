from rest_framework import serializers
from .models import Course, Category
from users.models import CustomUser
from .models import Module, Video, File

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

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['id', 'title', 'file', 'uploaded_at']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'video_url', 'order']

class ModuleSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True, read_only=True)
    files = FileSerializer(many=True, read_only=True)

class Meta:
    model = Module
    fields = ['id', 'title', 'order', 'videos', 'files']

def create(self, validated_data):
    category_id = validated_data.pop('category_id')
    category = Category.objects.get(id=category_id)
    return Course.objects.create(category=category, **validated_data)

def update(self, instance, validated_data):
    category_id = validated_data.pop('category_id', None)
    if category_id:
        instance.category = Category.objects.get(id=category_id)
    return super().update(instance, validated_data)
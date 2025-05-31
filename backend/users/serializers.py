from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'username', 
            'email', 
            'first_name', 
            'last_name', 
            'role',
            'date_joined'
        ]

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})
    
    class Meta:
        model = CustomUser
        fields = [
            'username', 
            'email', 
            'password', 
            'password2',
            'first_name', 
            'last_name',
            'role'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'role': {'required': False}
        }
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return data
    
    def create(self, validated_data):
        # Remove password2 from validated data
        validated_data.pop('password2')
        # Set default role if not provided
        if 'role' not in validated_data:
            validated_data['role'] = 'STUDENT'
        
        user = CustomUser.objects.create_user(
            **validated_data
        )
        return user
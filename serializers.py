from rest_framework import serializers
from .models import CustomUser, UserRoles
from django.contrib.auth import authenticate
from users.models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken


# --------------------
# Register Serializer
# --------------------
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'password', 'role']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password'],
            role=validated_data.get('role', UserRoles.STUDENT)
        )
        return user


# --------------------
# Login Serializer
# --------------------
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

def validate(self, data):
    email = data.get("email")
    password = data.get("password")

    if email and password:
        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError("Invalid email or password")
    else:
        raise serializers.ValidationError("Both email and password are required")

    refresh = RefreshToken.for_user(user)

    return {
        'access': str(refresh.access_token),
        'refresh': str(refresh),
        'user': {
            'id': str(user.id),
            'email': user.email,
            'name': user.name,
            'role': user.role
        }
    }

from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from .models import CustomUser

class CustomRegisterSerializer(RegisterSerializer):
    role = serializers.ChoiceField(choices=CustomUser.ROLE_CHOICES)

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['role'] = self.validated_data.get('role', 'student')
        return data

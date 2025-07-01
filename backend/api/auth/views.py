# backend/api/auth/views.py (FIXED)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer, RegisterSerializer
from users.models import CustomUser

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):  # Fixed indentation
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            user = serializer.save()
            return Response({
                'status': 'success',
                'data': {
                    'user_id': user.id,
                    'email': user.email,
                    'name': user.name,
                    'role': user.role
                }
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({
                'status': 'error',
                'errors': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .models import CustomUser
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterView(APIView):
    def post(self, request):
        data = request.data
        email = data.get('email')
        name = data.get('name')
        password = data.get('password')
        
        if User.objects.filter(email=email).exists():
            return Response({'error': 'User with this email already exists'}, status=400)

        user = User(email=email, name=name)
        user.set_password(password)  # <--- important: hashes the password!
        user.save()

        return Response({'message': 'User created successfully'}, status=201)
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        data = request.data
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            # create token & respond
            return Response({'message': 'Login successful'}, status=200)
        else:
            return Response({'error': 'Invalid login credentials'}, status=401)
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

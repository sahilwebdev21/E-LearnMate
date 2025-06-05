from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserListView, UserDetailView, UserRegistrationView

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),
    path('<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('users/login/', obtain_auth_token, name='api_token_auth'),
]
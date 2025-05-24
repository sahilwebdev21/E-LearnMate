from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    is_student = models.BooleanField(default=True)  # default role as student
    is_instructor = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'  # login with username
    REQUIRED_FIELDS = ['email']  # email required when creating user via createsuperuser

    def __str__(self):
        return self.username

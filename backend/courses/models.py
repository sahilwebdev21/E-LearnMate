from django.db import models
from django.conf import settings

class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories/')

    def __str__(self):
        return self.name


class InstructorProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField()
    image = models.ImageField(upload_to='instructors/')
    specialist = models.CharField(max_length=150)

    def __str__(self):
        return self.user.username


class Course(models.Model):
    instructor = models.ForeignKey(InstructorProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='courses/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

from django.contrib import admin
from .models import Category, Course, Module, Video, File

admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Video)
admin.site.register(File)
from django_filters import rest_framework as filters
from .models import Course

class CourseFilter(filters.FilterSet):
    category = filters.CharFilter(field_name="category__slug", lookup_expr='iexact')
    level = filters.CharFilter(field_name="level", lookup_expr='iexact')
    search = filters.CharFilter(method='filter_search')

class Meta:
    model = Course
    fields = ['category', 'level', 'search']

def filter_search(self, queryset, name, value):
    return queryset.filter(title__icontains=value) | queryset.filter(description__icontains=value)

from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsInstructorOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_authenticated and request.user.role == 'INSTRUCTOR'
    
def has_object_permission(self, request, view, obj):
    return self.has_permission(request, view) and obj.instructor == request.user

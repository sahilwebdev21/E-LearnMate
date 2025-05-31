from django.contrib import admin
from django.urls import path, include
from users import urls as user_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),

    path('api/connection-test/', lambda request: JsonResponse({"status": "ok"})),
]

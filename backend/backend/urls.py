from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from internships.views import CustomTokenView

urlpatterns = [
    path('admin/', admin.site.urls),

    # ONLY ONE API INCLUDE
    path('api/', include('internships.urls')),

    # JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/', CustomTokenView.as_view(), name='token_obtain_pair'),
]
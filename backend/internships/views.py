from rest_framework.viewsets import ModelViewSet
from .models import InternshipPlacement
from .serializers import InternshipPlacementSerializer

class InternshipPlacementViewSet(ModelViewSet):
    queryset = InternshipPlacement.objects.all()
    serializer_class = InternshipPlacementSerializer

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # 🔐 add role to token
        token['role'] = user.role
        token['username'] = user.username

        return token


class CustomTokenView(TokenObtainPairView):
    serializer_class = CustomTokenSerializer
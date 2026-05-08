from rest_framework.viewsets import ModelViewSet
from .models import WeeklyLog
from .serializers import WeeklyLogSerializer

class WeeklyLogViewSet(ModelViewSet):
    queryset = WeeklyLog.objects.all()
    serializer_class = WeeklyLogSerializer

    def perform_create(self, serializer):
        serializer.save(student=self.request.user)
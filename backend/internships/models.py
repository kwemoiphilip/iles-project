from django.db import models
from users.models import CustomUser

class InternshipPlacement(models.Model):
    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    company_name = models.CharField(max_length=255)

    start_date = models.DateField()
    end_date = models.DateField()

    supervisor_name = models.CharField(max_length=255)

    def clean(self):
        if self.start_date >= self.end_date:
            raise ValueError("Start date must be before end date")

    def __str__(self):
        return f"{self.student.username} - {self.company_name}"
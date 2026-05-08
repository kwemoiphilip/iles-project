from django.db import models
from users.models import CustomUser
from internships.models import InternshipPlacement

class WeeklyLog(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('submitted', 'Submitted'),
        ('reviewed', 'Reviewed'),
    ]

    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    placement = models.ForeignKey(InternshipPlacement, on_delete=models.CASCADE)

    week_number = models.IntegerField()
    work_done = models.TextField()
    challenges = models.TextField(blank=True)
    lessons_learned = models.TextField(blank=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')

    supervisor_comment = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Week {self.week_number} - {self.student.username}"
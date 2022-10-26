from django.db import models
from authentication.models import User
# Create your models here.


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=100)
    text = models.CharField(max_length=100)
    like = models.IntegerField()
    dislike = models.IntegerField()

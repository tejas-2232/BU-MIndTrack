from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    age = models.IntegerField(null=True, blank=True)

class ChatRoom(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    flag = models.BooleanField(default=False)
    timestamp = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"ChatRoom {self.id} - User: {self.user.username}"

class Conversation(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user1_conversations')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user2_conversations')
    message = models.TextField()
    timestamp = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Conversation between {self.user1.username} and {self.user2.username}"

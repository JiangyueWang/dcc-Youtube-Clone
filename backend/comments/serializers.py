from rest_framework import serializers
from backend.comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['video_id', 'text', 'like', 'dislike', 'user']
        depth = 1

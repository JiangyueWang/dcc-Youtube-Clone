from rest_framework import serializers
from comments.models import Reply
from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['video_id', 'text', 'like', 'dislike', 'user']
        depth = 1


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['comment', 'user', 'text']
        depth = 1

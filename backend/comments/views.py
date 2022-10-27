from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from comments.serializers import CommentSerializer
from comments.models import Comment
# Create your views here.


@api_view(['GET'])
def view_comments(request, videoId):
    video_info = Comment.objects.filter(video_id=videoId)
    if request.method == 'GET':
        # allow any user to view all the comments for a video
        # e.g. url:http://127.0.0.1:8000/api/comments/W6NZfCO5SIk
        try:
            serializer = CommentSerializer(video_info, many=True)
            return Response(serializer.data)
        except Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['PATCH'])
@ permission_classes([IsAuthenticated])
def comment_like(request, comment_id):
    # allow registered user to like a comment
    # e.g. url http://127.0.0.1:8000/api/comments/like/1/
    comment = get_object_or_404(Comment, id=comment_id)
    comment.like += 1
    comment.save()
    serializer = CommentSerializer(comment)
    return Response(serializer.data)


@api_view(['PATCH'])
@ permission_classes([IsAuthenticated])
def comment_dislike(request, comment_id):
    # allow registered user to dislike a comment
    # e.g. url http://127.0.0.1:8000/api/comments/dislike/1/
    comment = get_object_or_404(Comment, id=comment_id)
    comment.dislike += 1
    comment.save()
    serializer = CommentSerializer(comment)
    return Response(serializer.data)


@ api_view(['POST'])
@ permission_classes([IsAuthenticated])
def post_comment(request):

    if request.method == 'POST':
        # allow registered user to post comments to a video
        # e.g. url: http://127.0.0.1:8000/api/comments/
        serializers = CommentSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save(user=request.user)
            return Response(serializers.data, status=status.HTTP_201_CREATED)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

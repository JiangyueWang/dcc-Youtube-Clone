from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from comments.serializers import CommentSerializer

# Create your views here.


@api_view(['GET'])
def view_comments(request):
    return Response('hello')


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def post_comment(request):
    # only regitser user can post a comment to a video
    if request.method == 'POST':
        # print(
        # 'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        print(request.data)
        print(request.user.id)
        serializers = CommentSerializer(data=request.data)
        print(serializers)
        if serializers.is_valid():
            serializers.save(user=request.user)
            print(serializers.data)
            return Response(serializers.data, status=status.HTTP_201_CREATED)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

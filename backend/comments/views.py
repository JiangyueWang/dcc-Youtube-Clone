from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.


@api_view(['get'])
def get_all_videos(request):
    return Response('hello')

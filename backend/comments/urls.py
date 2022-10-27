from django.urls import path
from comments import views


urlpatterns = [
    path('', views.post_comment),
    # path('videoId/', views.view_comments)
    path('<str:videoId>/', views.view_comments)
]

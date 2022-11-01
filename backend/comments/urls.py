from django.urls import path
from comments import views


urlpatterns = [
    path('', views.post_comment),
    path('<str:videoId>/', views.view_comments),
    path('like/<int:comment_id>/', views.comment_like),
    path('dislike/<int:comment_id>/', views.comment_dislike),
    path('reply/<int:comment_id>/', views.reply_comment),
    path('replies/<int:comment_id>/', views.view_comment_replies),
]

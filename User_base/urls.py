from django.urls import path
from . import views
from knox import views as knox_views

app_name = 'User_base'
urlpatterns = [
    path('login/', views.LoginView.as_view(), name='knox_login'),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
    path('user/', views.UserView.as_view(), name='User'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('friends/', views.FriendListView.as_view(), name='friend-list'),
]
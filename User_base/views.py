from django.shortcuts import render
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from rest_framework import permissions, generics
from . import serializers
from .models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

class LoginView(KnoxLoginView):
    serializer_class = AuthTokenSerializer
    permission_classes = [permissions.AllowAny]
    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


class UserView(APIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = {
        permissions.IsAuthenticatedOrReadOnly,
    }

    def post(self, request, format=None):
        serializer = serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = serializers.ProfileSerializer
    permission_classes = {
        permissions.IsAuthenticatedOrReadOnly,
    }

class FriendListView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FriendList.objects.all()
    serializer_class = serializers.FriendListSerializer
    permission_classes = {
        permissions.IsAuthenticated,
    }

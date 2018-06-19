from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class FriendListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendList
        fields = '__all__'


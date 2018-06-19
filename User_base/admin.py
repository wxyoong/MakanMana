from django.contrib import admin, auth
from .models import *

class FriendAdmin(admin.ModelAdmin):
    filter_horizontal = ('friend_list',)

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['email']

admin.site.register(User, CustomUserAdmin)
admin.site.register(Profile)
admin.site.register(FriendList, FriendAdmin)
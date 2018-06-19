from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import os
import shortuuid
from django.utils.translation import ugettext_lazy as _

class MyUserManager(BaseUserManager):
    def _create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """
    User class for account creation
    """
    email = models.EmailField(unique=True, null=True)
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    USERNAME_FIELD = 'email'
    objects = MyUserManager()

    def __str__(self):
        return self.email

    def get_file_path(instance, filename):
        ext = filename.split('.')[-1]
        filename = "%s.%s" % (shortuuid.uuid(), ext)
        return os.path.join('user_uploads/', filename)
    
class Preference(models.Model):
    tag = models.CharField(max_length=20, blank=True)

class Profile(models.Model):
    """
    Profile class to display user info
    """
    user = models.OneToOneField(User, blank=True, null=True, on_delete=models.CASCADE)
    username = models.CharField(blank=False, null=True, max_length=20)
    profile_pic = models.ImageField(upload_to=User.get_file_path, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    GENDER_CHOICES = ((0, 'Male'), (1,'Female'),)
    gender = models.IntegerField(choices=GENDER_CHOICES, null=True, blank=True)
    status = models.TextField(blank=True)
    recent_location_X = models.CharField(max_length=15, blank=True)
    recent_location_Y = models.CharField(max_length=15, blank=True)
    user_preference = models.ForeignKey(Preference, on_delete=models.CASCADE)
    def create_profile(self, user, profile_pic):
        pass
    def __str__(self):
        return str(self.user)
    def get_username(self):
        return self.username

class FriendList(models.Model):
    """
    FriendList class to list friend(s) of that particular user
    """
    current_user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="This_user", null=True)
    friend_list = models.ManyToManyField(User)
    def __str__(self):
        return str(self.current_user)


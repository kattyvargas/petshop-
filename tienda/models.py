from django.db import models
from django.utils import timezone



class Usuario(models.Model):
    username = models.AutoField(primary_key = True)
    password = models.CharField(max_length = 200)
from django.db import models

class Client(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    idade = models.IntegerField()
    sexo = models.CharField(max_length=1)
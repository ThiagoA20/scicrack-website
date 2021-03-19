from django.db import models
from django.shortcuts import render

class Product(models.Model):
    product = models.CharField(max_length=255)
    price = models.FloatField()
    avaliations = models.IntegerField()
    images = models.ImageField(upload_to='profile_pic', default='default.jpg')

class Account(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=510)
    wishlist = models.CharField(max_length=1200)

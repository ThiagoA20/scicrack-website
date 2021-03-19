from django.contrib import admin
from .models import Product

@admin.register(Product)
class productsAdmin(admin.ModelAdmin):
    list_display = ['product', 'price', 'avaliations']
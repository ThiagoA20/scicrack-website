from .models import Product
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def list_products(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})

def login(request):
    return render(request, 'login_register.html')

def shopping_cart(request):
    return render(request, 'cart.html')

def support(request):
    return render(request, 'support.html')

def about(request):
    return render(request, 'about.html')

def faq(request):
    return render(request, 'faq.html')

def shipping(request):
    return render(request, 'shipping.html')

def terms(request):
    return render(request, 'terms.html')

def privacy(request):
    return render(request, 'privacy.html')

def returns(request):
    return render(request, 'returns.html')

from .models import Product, Newsletter
from django.shortcuts import get_object_or_404, render, redirect, reverse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NewsSerializer

from django.contrib.auth.forms import UserCreationForm
from .models import CreateUserForm

from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def home(request):
    products = Product.objects.all()
    return render(request, 'home.html', {'products': products})

def list_products(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})

@api_view(['POST'])
def newsletter(request):
    serializer = NewsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return redirect('products:home')

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

def LoginPage(request):
    if request.user.is_authenticated:
        return redirect(reverse('products:list_products'))
    else:
        form = CreateUserForm()

        if request.method == 'POST' and 'btnform2' in request.POST:
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                email = form.cleaned_data.get('email')
                messages.success(request, 'Account created successfully!')
                messages.error(request, 'Invalid Account, try again')

                return redirect(reverse('products:login'))
        
        if request.method == 'POST' and 'btnform1' in request.POST:
            username = request.POST['username']
            password = request.POST['password']

            user = authenticate(request, username=username, password=password)
            messages.error(request, 'Invalid Account, try again')

            if user is not None:
                login(request, user)
                return redirect(reverse('products:list_products'))

        context = {'form': form }
        return render(request, 'login_register.html', context)

def LogoutUser(request):
    logout(request)
    return redirect(reverse('products:login'))


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug, in_stock=True)
    return render(request, 'product_detail.html', {'product': product})


@login_required(login_url='products:login')
def wishlist(request):
    return render(request, 'wishlist.html')

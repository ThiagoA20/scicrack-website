from django.urls import path
from .views import home, list_products, login, shopping_cart, support, about, faq, shipping, terms, privacy, returns

app_name = 'products'

urlpatterns = [
    path('', home, name='home'),
    path('shop/', list_products, name='list_products'),
    path('login/', login, name='login'),
    path('cart/', shopping_cart, name='cart'),
    path('support/', support, name='support'),
    path('about/', about, name='about'),
    path('faq/', faq, name='faq'),
    path('shipping/', shipping, name='shipping'),
    path('terms/', terms, name='terms'),
    path('privacy-policy/', privacy, name='privacy'),
    path('returns/', returns, name='returns')
]
from django.urls import path
from .views import home, list_products, shopping_cart, support, about, faq, shipping, terms, privacy, returns, newsletter
from .views import LoginPage, LogoutUser, wishlist
from django.conf import settings
from django.conf.urls.static import static

app_name = 'products'

urlpatterns = [
    path('', home, name='home'),
    path('shop/', list_products, name='list_products'),
    path('cart/', shopping_cart, name='cart'),
    path('wishlist/', wishlist, name='wishlist'),
    path('support/', support, name='support'),
    path('about/', about, name='about'),
    path('faq/', faq, name='faq'),
    path('shipping/', shipping, name='shipping'),
    path('terms/', terms, name='terms'),
    path('privacy-policy/', privacy, name='privacy'),
    path('returns/', returns, name='returns'),
    path('newsletter-sign-in/', newsletter, name='news-sign-in'),
    path('login/', LoginPage, name='login'),
    path('logout/', LogoutUser, name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
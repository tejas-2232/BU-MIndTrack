from django.urls import path
from api.views import RegisterView, LoginView, LogoutView, HelloView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('hello/', HelloView.as_view(), name='hello'),
]

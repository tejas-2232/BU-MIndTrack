"""
URL configuration for QuizWise project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('register', views.register_user, name='register'),
    path('login', views.user_login, name='login'),
    path('logout', views.user_logout, name='logout'),
    path('forgot', views.forgot, name='forgot'),
    path('reset_password/', views.reset_password, name='reset_password'),
    path("test", views.examiner_test, name = "examiner_test"),
    path("unauthorized", views.unauthorized, name = "unauthorized"),


    path('examiner/', include("QuizCreator.urls")),
    path('examinee/', include("QuizParticipant.urls")),
]

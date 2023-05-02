"""
URL configuration for finGen project.

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
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CategoriaList, CategoriaDetail, DespesaList, DespesaDetail, ReceitaList, ReceitaDetail, UserList, UserDetails, CustomTokenObtainPairView, UserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categorias/', CategoriaList.as_view(), name='categoria-list'),
    path('categorias/<int:pk>/', CategoriaDetail.as_view(), name='categoria-detail'),
    path('despesas/', DespesaList.as_view(), name='despesa-list'),
    path('despesas/<int:pk>/', DespesaDetail.as_view(), name='despesa-detail'),
    path('receitas/', ReceitaList.as_view(), name='receita-list'),
    path('receitas/<int:pk>/', ReceitaDetail.as_view(), name='receita-detail'),
    path('users/', UserList.as_view(), name='user-list'),
    path('user/', UserView.as_view(), name='user'),
    path('users/<int:pk>/', UserDetails.as_view(), name='user-detail'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token-obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token-refresh')
]

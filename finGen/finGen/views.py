from rest_framework import generics, permissions
from rest_framework_simplejwt import views
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User
from .models import Categoria, Despesa, Receita
from .serializers import CategoriaSerializer, DespesaSerializer, ReceitaSerializer, UserSerializer, CustomTokenObtainPairSerializer

class CategoriaList(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class DespesaList(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

class DespesaDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

class ReceitaList(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

class ReceitaDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

class UserList(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetails(generics.RetrieveUpdateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

# autenticação
class CustomTokenObtainPairView(views.TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
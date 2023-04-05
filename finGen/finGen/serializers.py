from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from .models import Categoria, Despesa, Receita

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class DespesaSerializer(serializers.ModelSerializer):
    categoria = categoria = serializers.SlugRelatedField(
        queryset=Categoria.objects.all(),
        slug_field='id'
    )

    class Meta:
        model = Despesa
        fields = '__all__'

class ReceitaSerializer(serializers.ModelSerializer):
    categoria = categoria = serializers.SlugRelatedField(
        queryset=Categoria.objects.all(),
        slug_field='id'
    )

    class Meta:
        model = Receita
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token
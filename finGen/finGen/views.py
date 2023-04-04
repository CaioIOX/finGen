from rest_framework import generics
from .models import Categoria, Despesa, Receita
from .serializers import CategoriaSerializer, DespesaSerializer, ReceitaSerializer

class CategoriaList(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class DespesaList(generics.ListCreateAPIView):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

class DespesaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

class ReceitaList(generics.ListCreateAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

class ReceitaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer
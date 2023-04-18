from django.contrib import admin
from .models import Categoria
from .models import Despesa
from .models import Receita


admin.site.register([Categoria, Despesa, Receita])
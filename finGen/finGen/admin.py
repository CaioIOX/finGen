from django.contrib import admin
from .models import Categoria
from .models import Despesa


admin.site.register([Categoria, Despesa])
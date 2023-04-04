from django.db import models

class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Despesa(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    Categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    data = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.descricao
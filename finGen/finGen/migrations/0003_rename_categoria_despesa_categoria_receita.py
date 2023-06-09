# Generated by Django 4.2 on 2023-04-04 11:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('finGen', '0002_alter_despesa_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='despesa',
            old_name='Categoria',
            new_name='categoria',
        ),
        migrations.CreateModel(
            name='Receita',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=200)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=8)),
                ('data', models.DateField()),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='finGen.categoria')),
            ],
        ),
    ]

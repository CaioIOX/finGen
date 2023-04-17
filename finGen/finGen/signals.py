from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
import psycopg2

@receiver(post_save, sender=User)
def make_user_db(sender, instance, created, **kwargs):
    if created:
        make_db(instance.username)

def make_db(db_name):
    # Estabelece conexão com postgres
    conn = psycopg2.connect(
        host='localhost',
        port='5433',
        user='postgres',
        password='ilhademare',
        database='postgres'
    )

    # cria banco de dados com nome especificado
    cur = conn.cursor()
    cur.execute(f"CREATE DATABASE {db_name}")
    cur.close()

    # Fecha conexão com postgres
    conn.close()
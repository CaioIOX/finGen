from django.apps import AppConfig

class finGenConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'finGen'

    def ready(Self):
        import finGen.signals
from django.http import JsonResponse
from .exceptions import AppError

class ErrorHandlerMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response
    
    def process_exception(self, request, exception):
        error_message = str(exception)
        error_code = 500

        if isinstance(exception, AppError):
            error_code = AppError.status_code

        return JsonResponse({"error_code": error_code, "error_message": error_message}, status=error_code)
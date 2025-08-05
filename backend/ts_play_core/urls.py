
# urls.py
from django.urls import path
from .views import get_page_content

urlpatterns = [
    path('pages/<slug:slug>/', get_page_content),
]


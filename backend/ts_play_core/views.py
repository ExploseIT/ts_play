from django.shortcuts import render

# Create your views here.
# views.py
from django.http import JsonResponse, Http404
from .models import PageContent

def get_page_content(request, slug):
    try:
        page = PageContent.objects.get(slug=slug)
        return JsonResponse({
            "title": page.title,
            "html": page.html_content
        })
    except PageContent.DoesNotExist:
        raise Http404("Page not found")

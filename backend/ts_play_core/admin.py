from django.contrib import admin

# Register your models here.
# ts_play_core/admin.py
from django.contrib import admin
from .models import PageContent

admin.site.register(PageContent)

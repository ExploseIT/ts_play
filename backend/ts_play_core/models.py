from django.db import models

# Create your models here.
# models.py
from django.db import models

class PageContent(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=255)
    html_content = models.TextField()

    def save(self, *args, **kwargs):
        self.slug = self.slug.lower()
        super().save(*args, **kwargs)

        
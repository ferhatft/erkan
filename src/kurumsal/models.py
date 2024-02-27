from django.db import models
from django.db.models.fields import TextField
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User


class ClientopinionModel(models.Model):    
    title                           = models.CharField(max_length=40,verbose_name = "Nom client",blank=True)
    image                           = models.FileField(upload_to='client-image/', max_length=1000,verbose_name='image client 187x187',blank=True, null=True)
    company                         = models.CharField(max_length=40,verbose_name = "Compagnie",blank=True)
    decription                      = models.TextField(max_length=400,verbose_name="La description")


    def __str__(self):
        return '%s %s' % (self.title,self.id)

    
    def get_absolute_url(self):
        if self.slug:
            return "/company/about"

    class Meta:
        ordering = ['id']
        verbose_name = 'Yorum'
        verbose_name_plural = 'yorumlar'
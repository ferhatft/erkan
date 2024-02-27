from django.db import models
from django.template.defaultfilters import slugify, title

from ckeditor_uploader.fields import RichTextUploadingField

from django.utils.translation import get_language




class PortfolioModel(models.Model):    
    title                           = models.CharField(max_length=40,verbose_name = "Titre",blank=True)
    category                        = models.CharField(max_length=40,verbose_name = "Catégorie",blank=True)
    creator                         = models.CharField(max_length=40,verbose_name = "créateur",blank=True)
    slug                            = models.SlugField(blank=True, null=True,verbose_name='limace')
    mainimage                       = models.ImageField(verbose_name='image',blank=True, null=True)
    decription                      = RichTextUploadingField(verbose_name="description",blank=True, null=True)
    rating                          = models.DecimalField( verbose_name="Notation", max_digits=5, decimal_places=0,blank=True, null=True)
  
    def __str__(self):
        return '%s %s' % (self.title, self.id)

    def save(self, *args, **kwargs):

        title =  slugify(self.title)
        self.slug = title


        return super(PortfolioModel, self).save(*args, **kwargs)
        
    
    def get_absolute_url(self):
        user_language = get_language()
        try:
            if self.slug:
                return "/portfolio/{str}".format(str=self.slug)
        except:
                return "/{ky}/portfolio/{str}".format(ky=user_language,str=self.slug)

    class Meta:
        ordering = ['id']
        verbose_name = 'portfolio'
        verbose_name_plural = 'Portfolios'


class PortfolioModelGaleri(models.Model):
    drinks                  = models.ForeignKey(PortfolioModel, related_name='PortfolioModelGaleri', on_delete=models.CASCADE,blank=True, null=True)
    created_date            = models.DateTimeField(auto_now_add=True,null=True,verbose_name="Oluşturulma Tarihi")
    image                   = models.FileField(upload_to='portfolio-image/', max_length=100,verbose_name='600x325')

    
    def __str__(self):
        return '%s %s' % (self.image , self.id)

    class Meta:
        ordering = ['created_date']
        verbose_name = 'Galerie'
        verbose_name_plural = 'galeries'

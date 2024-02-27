from django.db import models

from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericRelation

from six import python_2_unicode_compatible
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.translation import get_language


from hitcount.models import HitCountMixin
from hitcount.settings import MODEL_HITCOUNT

# Create your models here.,


@python_2_unicode_compatible
class BlogModel(models.Model,HitCountMixin):
    title                   = models.CharField(max_length=500,verbose_name = "başlık", blank=True)
    slug                    = models.SlugField(max_length=500, blank=True, null=True,verbose_name='uzantı')
    category                = models.CharField(max_length=40,verbose_name = "Catégorie",blank=True)
    image                   = models.ImageField(null=True,verbose_name='ana resim "1200x840"')
    rating                  = models.DecimalField(max_digits=6, decimal_places=0, null=True, blank=True,verbose_name="öne çıkarma")
    created_date            = models.DateField(blank=True, null=True,verbose_name="oluşturulma tarihi")
    intro                   = RichTextUploadingField(blank=True, null=True, verbose_name='içerik') 
    hit_count_generic       = GenericRelation(MODEL_HITCOUNT, object_id_field='object_pk',related_query_name='hit_count_generic_relation')


    # anahaber                = models.BooleanField(default=False,verbose_name='anasayfada göster')


    def __str__(self):
        return '%s %s' % (self.title, self.id)

    
    def save(self, *args, **kwargs):
        title =  slugify(self.title)
        self.slug = title

        return super(BlogModel, self).save(*args, **kwargs)

        
    def get_absolute_url(self):
        
        user_language = get_language()
        try:
            if self.slug:
                return "/blog/{str}/".format(str=self.slug)
        except:
                return "/{ky}/blog/{str}/".format(ky=user_language,str=self.slug)
        
    class Meta:
        ordering = ['title']
        verbose_name = 'blog'
        verbose_name_plural = 'blogs'
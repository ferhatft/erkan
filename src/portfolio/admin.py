from django.contrib import admin

from .models import PortfolioModel,PortfolioModelGaleri
# Register your models here.



class PortfolioModelGaleriAdmin(admin.TabularInline):
    model = PortfolioModelGaleri
    extra = 1


class SanayiModelAdmin(admin.ModelAdmin):

    inlines = (PortfolioModelGaleriAdmin,)

    # fields = ('title', 'tags','slug','author','backimage','rating','created_date' , 'intro','anahaber',)

    # readonly_fields = ('rating','created_date')

    # list_display = ('title', 'rating', 'author',)

    # list_filter = ('created_date', 'rating',)

    # ordering = ('-created_date',)


admin.site.register(PortfolioModel, SanayiModelAdmin)
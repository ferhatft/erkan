from modeltranslation.translator import translator, register,TranslationOptions
from .models import BlogModel


class BlogModelTranslationsOptions(TranslationOptions):
    fields = ('title','intro')
    empty_values = {'slug': None}


# translator.register(BlogModel, BlogModelTranslationsOptions)



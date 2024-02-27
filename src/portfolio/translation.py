from modeltranslation.translator import translator, register,TranslationOptions
from .models import PortfolioModel,PortfolioModelGaleri


class PortfolioModelTranslationsOptions(TranslationOptions):
    fields = ('title','decription')
    empty_values = {'slug': None}


# translator.register(PortfolioModel, PortfolioModelTranslationsOptions)



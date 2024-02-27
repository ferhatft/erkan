from django.shortcuts import render

# Create your views here.
from kurumsal.models import ClientopinionModel
from portfolio.models import PortfolioModel
from  haber.models import BlogModel
def anasayfa(request):

    clien_opinion = ClientopinionModel.objects.all()
    portfolioobjs  = PortfolioModel.objects.order_by('rating')
    blogobjs  = BlogModel.objects.all()
    context = {
        'clien_opinion':clien_opinion,
        'portfolioobjs':portfolioobjs,
        'blogobjs':blogobjs,
    }
    return render(request, "index.html", context)


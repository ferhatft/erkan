from django.shortcuts import render,redirect,reverse

from django.db.models import Q

from .models import PortfolioModel
# Create your views here.


def portfolio(request):


    products = PortfolioModel.objects.all()
    ratedproducts  = PortfolioModel.objects.order_by('rating')

    if request.GET:
        if 'search' in request.GET:
            query = request.GET['search']
            if not query:
                return redirect(reverse('products'))
            queries = Q(keys__icontains=query) 
            products = products.filter(queries)


    
    # galeri =  products.PortfolioModelGaleri.all()

    context = {
        'products':products,
        'ratedproducts':ratedproducts,
        # 'galeri':galeri,

    }
    return render(request, "portfolio.html", context)


def portfoliodetail(request,slug): 
    
    products = PortfolioModel.objects.all()
    product = PortfolioModel.objects.get(slug=slug)
    ratedproducts  = PortfolioModel.objects.order_by('rating')
    newproducts  = PortfolioModel.objects.order_by('-id')[:10]

    print("-------------------------")

    print(product)
    galeri =  product.PortfolioModelGaleri.all()

    context = {
        'products':products,
        'product':product,
        'ratedproducts':ratedproducts,
        'newproducts':newproducts,
        'galeri':galeri,

    }
    return render(request, "portfolio_detail.html", context)
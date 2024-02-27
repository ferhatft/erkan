from django.urls import path

from .views import portfolio,portfoliodetail


urlpatterns = [
    path('', portfolio, name="portfolio"),
    path('<slug:slug>', portfoliodetail, name="portfoliodetail"),

]
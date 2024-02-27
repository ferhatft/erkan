from django.shortcuts import render
from .models import ClientopinionModel
# Create your views here.


def hakkimizda(request):
    clientopinion = ClientopinionModel.objects.all()
    print(clientopinion)
    context = {
        'clientopinion':clientopinion,
    }
    return render(request, "hakkimizda.html", context)


def sertifikalarimiz(request):
   
    context = {
    }
    return render(request, "sertifikalarimiz.html", context)


def hizmetlerimiz(request):
   
    context = {
    }
    return render(request, "hizmetlerimiz.html", context)



def ekibimiz(request):
   
    context = {
    }
    return render(request, "ekibimiz.html", context)



def nedenbiz(request):
   
    context = {
    }
    return render(request, "nedenbiz.html", context)

    
def galeri(request):
   
    context = {
    }
    return render(request, "galeri.html", context)
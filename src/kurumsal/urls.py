from django.urls import path

from .views import hakkimizda,sertifikalarimiz,hizmetlerimiz,ekibimiz,nedenbiz,galeri


urlpatterns = [
    path('hakkimizda', hakkimizda, name="hakkimizda"),
    path('sertifikalarimiz', sertifikalarimiz, name="sertifikalarimiz"),
    path('hizmetlerimiz', hizmetlerimiz, name="hizmetlerimiz"),
    path('ekibimiz', ekibimiz, name="ekibimiz"),
    path('nedenbiz', nedenbiz, name="nedenbiz"),
    path('galeri', galeri, name="galeri"),
]
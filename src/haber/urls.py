from django.urls import path, include
from .views import blog,blogdetay,PostDetailView

urlpatterns = [
    path('', blog, name="blogs"),
    # path('<slug:slug>/', blogdetay, name="blogdetay"),
    path('<str:slug>/', PostDetailView.as_view(),   name='post_detail'),
    
]

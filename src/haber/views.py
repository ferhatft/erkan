from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView
from .models import BlogModel
from django.db.models import Q

from hitcount.views import HitCountDetailView




def blog(request):

    blogs = BlogModel.objects.all().order_by('-id')

    context = {
        'blogs':blogs,
    }

    return render(request, 'blog.html', context)

    
def blogdetay(request, slug):

    allblogs = BlogModel.objects.all()[:4]

    obj = get_object_or_404(BlogModel, slug=slug)

    count_hit = True

    context = {
        'allblogs':allblogs,
        'obj': obj,
        count_hit :True,
    }

    return render(request, 'blogdetay.html', context)


class PostDetailView(HitCountDetailView):
    count_hit = True
    model = BlogModel
    slug_field="slug"
    template_name = 'blogdetay.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['allblogs'] = BlogModel.objects.all()[:4]
        return context
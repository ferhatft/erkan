from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone','message']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Nom / Prénom'}),
            'email': forms.TextInput(attrs={'placeholder': 'E-mail'}),
            'phone': forms.TextInput(attrs={'placeholder': 'N•téléphone'}),
            # 'subject': forms.ChoiceField(attrs={'placeholder': 'Talebiniz'}),
            'message': forms.Textarea(attrs={'placeholder': 'Votre demande'}),
        }

    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px'



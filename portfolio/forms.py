from django import forms




class ContactoForm(forms.Form):

	nombre=forms.CharField(max_length=30)
	email=forms.EmailField(max_length=100,)
	asunto=forms.CharField(max_length=100,required=False)
	mensaje=forms.CharField(widget=forms.Textarea(attrs={'rows': '5'}),)

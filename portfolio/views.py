from django.shortcuts import render
from portfolio.models import *
import time
from django.http import HttpResponse
from luisvillarbello.settings import MEDIA_ROOT
from portfolio.forms import *
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.shortcuts import redirect


def index(request,ty=False):
	web='luisvillarbello.com'
	fecha=time.strftime("%d/%m/%y")


	habilidades=list(Habilidad.objects.all().order_by('-nivel'))
	idiomas=list(Idioma.objects.all().order_by('-nivel'))
	experiencias=list(Experiencia.objects.all().order_by('-id'))
	educacion=list(Formacion.objects.all().order_by('-id'))
	socialmedia=list(SocialMedia.objects.all())


	

	try:
		perfil=Perfil.objects.get()
		
	except:
		perfil={'nombre':'vacio'}


	

	skin = perfil.apariencia
	#1 Taylor 2 Jane
	if skin==1:
		template='taylor.html'
		form=ContactoForm()


	elif skin==2:
		form=''
		template='inicio.html'


	else:
		template='inicio.html'




	
	return render(
		request,
		'portfolio/'+template,
		{
		'web':web,
		'fecha':fecha,
		'perfil':perfil,
		'habilidades':habilidades,
		'idiomas':idiomas,
		'experiencias':experiencias,
		'educacion':educacion,
		'socialmedia':socialmedia,
		'template':skin,
		'form':form,
		'ty':ty,

		})



##############################################################################################################



def cv(request):

	perfil=Perfil.objects.get()
	file=perfil.cv.pdf_file

	f = open(MEDIA_ROOT+'/'+str(file), 'rb')
	response = HttpResponse(f, content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="CV_LuisVillarBello.pdf"'

	

	return response



##############################################################################################################


def contacto(request):
	web='luisvillarbello.com'
	fecha=time.strftime("%d/%m/%y")
	perfil=Perfil.objects.get()
	habilidades=list(Habilidad.objects.all().order_by('-nivel'))
	idiomas=list(Idioma.objects.all().order_by('-nivel'))
	socialmedia=list(SocialMedia.objects.all())
	experiencias=list(Experiencia.objects.all().order_by('-id'))
	educacion=list(Formacion.objects.all().order_by('-id'))

	template="contacto.html"


	if request.POST:
		form=ContactoForm(request.POST)

		if form.is_valid():
			template="gracias.html"
			email=request.POST.get('email')

			
			body=render_to_string('portfolio/email_content.html',{
				'nombre':request.POST.get('nombre'),
				'email':email,
				'asunto':request.POST.get('asunto'),
				'mensaje':request.POST.get('mensaje')})


			email_mensaje=EmailMessage(
				subject='mensaje desde luisvillarbello.com',
				body=body,
				from_email=email,
				to=['namenal@gmail.com'],
				)

			email_mensaje.content_subtype = "html"
			email_mensaje.content_type = "html"
			email_mensaje.send(fail_silently = True)


		else:
			pass

	else:

		form=ContactoForm()



	return render(
		request,
		'portfolio/'+template,
		{
		'web':web,
		'fecha':fecha,
		'perfil':perfil,
		'habilidades':habilidades,
		'socialmedia':socialmedia,
		'idiomas':idiomas,
		'form':form,
		'experiencias':experiencias,
		'educacion':educacion,
		


		})



##############################################################################################################




def contact(request):
	web='luisvillarbello.com'
	fecha=time.strftime("%d/%m/%y")
	perfil=Perfil.objects.get()
	habilidades=list(Habilidad.objects.all().order_by('-nivel'))
	idiomas=list(Idioma.objects.all().order_by('-nivel'))
	socialmedia=list(SocialMedia.objects.all())
	experiencias=list(Experiencia.objects.all().order_by('-id'))
	educacion=list(Formacion.objects.all().order_by('-id'))


	if request.POST:
		form=ContactoForm(request.POST)

		if form.is_valid():
			
			email=request.POST.get('email')

			
			body=render_to_string('portfolio/email_content.html',{
				'nombre':request.POST.get('nombre'),
				'email':email,
				'asunto':request.POST.get('asunto'),
				'mensaje':request.POST.get('mensaje')})


			email_mensaje=EmailMessage(
				subject='mensaje desde luisvillarbello.com',
				body=body,
				from_email=email,
				to=['namenal@gmail.com'],
				)

			email_mensaje.content_subtype = "html"
			email_mensaje.content_type = "html"
			email_mensaje.send(fail_silently = True)

			return index(request,ty=True)


		else:
			pass

	else:

		form=ContactoForm()



	return render(
		request,
		'portfolio/taylor.html',
		{
		'web':web,
		'fecha':fecha,
		'perfil':perfil,
		'habilidades':habilidades,
		'socialmedia':socialmedia,
		'idiomas':idiomas,
		'form':form,
		'experiencias':experiencias,
		'educacion':educacion,	})

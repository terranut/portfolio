from django.db import models
from django.utils.html import format_html
from django.core.validators import FileExtensionValidator


# Create your models here.
"""
class Enlaces(models.Model):
	enlace=models.CharField(max_length=100)
	pagina=models.ForeignKey('Pagina',on_delete=models.CASCADE)

	def __str__(self):
		return self.enlace


class Categoria(models.Model):
	nombre_cat=models.CharField(max_length=30)

	def __str__(self):
		return self.nombre_cat

class Subcategoria(models.Model):
	nombre_sub=models.CharField(max_length=30)
	categoria=models.ForeignKey('Categoria',on_delete=models.CASCADE)

	def __str__(self):
		return self.nombre_sub

class Pagina(models.Model):
	titulo=models.CharField(max_length=30)
	descripcion=models.TextField()
	codigo=models.TextField(blank=True)
	subpagina=models.ManyToManyField('Pagina',blank=True)
	categoria=models.ForeignKey('Categoria',on_delete=models.CASCADE)
	subcategoria=models.ForeignKey('Subcategoria',on_delete=models.CASCADE)
	

	def __str__(self):
		return self.titulo

"""

##########################################################################################
opciones=[(30,30),(50,50),(70,70),(90,90),(100,100)]

skin=[ (1,'Taylor'), (2,'Jane'),(3,'Williams') ]

socialmedia=[
('facebook','Facebook'),
('twitter','Twitter'),
('youtube','Youtube'),
('linkedin','Linkedin'),
('instagram','Instagram'),
('pinterest','Pinterest'),
('reddit','Reddit'),
('github','GitHub'),
('google','Google '),

]

class Experiencia(models.Model):
	titulo=models.CharField(max_length=100)
	empresa=models.CharField(max_length=100,blank=True)
	fecha=models.CharField(max_length=100,blank=True,help_text='Enero 2017 - Octubre 2018')
	texto=models.TextField(blank=True)

	class Meta:
		verbose_name_plural='Experiencia'


	def __str__(self):
		return self.titulo

class Formacion(models.Model):
	titulo=models.CharField(max_length=100)
	centro=models.CharField(max_length=100,blank=True)
	fecha=models.CharField(max_length=100,blank=True,help_text='Enero 2017 - Octubre 2018')
	texto=models.TextField(blank=True)

	class Meta:
		verbose_name_plural='Estudios'

	def __str__(self):
		return self.titulo

class Habilidad(models.Model):
	nombre=models.CharField(max_length=30)
	nivel=models.PositiveIntegerField(choices=opciones)

	class Meta:
		verbose_name_plural='Habilidades'


	def __str__(self):
		return self.nombre


class Idioma(models.Model):
	
	idioma=models.CharField(max_length=50)
	nivel=models.PositiveIntegerField(choices=opciones)

	def __str__(self):
		return self.idioma





class Perfil(models.Model):
	profesion=models.CharField(max_length=50)
	lugar=models.CharField(max_length=30,blank=True)
	email=models.CharField(max_length=50)
	tlf=models.CharField(max_length=15,blank=True)
	nombre=models.CharField(max_length=50)
	apellidos=models.CharField(max_length=50)
	img=models.ForeignKey('Image',on_delete=models.PROTECT)
	cv=models.ForeignKey('Curriculo',on_delete=models.PROTECT,null=True,blank=True)
	descripcion=models.TextField(blank=True)
	intereses=models.TextField(blank=True)
	apariencia=models.IntegerField(choices=skin,default=2)

	def muestra(self):
		return format_html('<img src="/static/img/{}" width="100"/>{}'.format(self.img,self.img))

	muestra = property(muestra)
	

	class Meta:
		verbose_name_plural='Perfil'

	def __str__(self):
		return self.nombre





class Image(models.Model):
	imagen=models.ImageField(max_length=50,upload_to='')

	
	
	class Meta:
		verbose_name_plural='Imagenes'


	def __str__(self):
		return self.imagen.name




class SocialMedia(models.Model):

	nombre=models.CharField(max_length=20,choices=socialmedia)
	enlace=models.CharField(max_length=200)

	def __str__(self):
		return str(self.nombre)

	class Meta:
		verbose_name_plural='Redes Sociales'




class Proyecto(models.Model):
	titulo=models.CharField(max_length=50)
	descripcion=models.TextField(blank=True)
	img=models.ManyToManyField('Image')
	
	class Meta:
		verbose_name_plural='Proyectos'

	def __str__(self):
		return str(self.titulo)




class Curriculo(models.Model):
	nombre=models.CharField(max_length=50)
	pdf_file=models.FileField(upload_to='cv/',
		validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


	def __str__(self):
		return str(self.nombre)


	
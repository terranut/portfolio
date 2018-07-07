from django.contrib import admin
from django.utils.html import format_html


# Register your models here.

from portfolio.models import *





# Register your models here.

class ExperienciaAdmin(admin.ModelAdmin):
	list_display=('titulo','fecha','texto')

###################################################################################################################

class FormacionAdmin(admin.ModelAdmin):
	list_display=('titulo','fecha','texto')

###################################################################################################################

class HabilidadAdmin(admin.ModelAdmin):
	list_display=('nombre','nivel')

###################################################################################################################

class IdiomaAdmin(admin.ModelAdmin):
	list_display=('idioma','nivel')
	
###################################################################################################################



@admin.register(Perfil)
class PerfilAdmin(admin.ModelAdmin):
	fields=('nombre','apellidos','email','tlf','profesion','lugar','img','muestra','descripcion','intereses','cv','apariencia')
	readonly_fields=('muestra',)

	raw_id_fields=('img',)
	
	

	def Avatar(self,obj):
		return format_html('<img src="/static/img/{}" width="50"/>'.format(obj.img))

	def NombreImg(self,obj):
		return str(obj.img)
	NombreImg.short_description = 'Nombre imagen'
	list_display=('nombre','profesion','email','tlf','Avatar','NombreImg','descripcion','cv')


###################################################################################################################


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
	
	def image_tag(self, obj):
		return format_html('<img src="/static/img/{}" width="100"/>'.format(obj.imagen.name))

	list_display = ['image_tag',]
	image_tag.short_description = 'Imagen'


###################################################################################################################

class SocialMediaAdmin(admin.ModelAdmin):
	fields=('nombre','enlace')

	
###################################################################################################################




@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
	pass


###################################################################################################################

@admin.register(Curriculo)
class CurriculoAdmin(admin.ModelAdmin):
	pass

	


###################################################################################################################




admin.site.register(Experiencia,ExperienciaAdmin)
admin.site.register(Formacion,FormacionAdmin)
admin.site.register(Habilidad,HabilidadAdmin)
admin.site.register(Idioma,IdiomaAdmin)


admin.site.register(SocialMedia,SocialMediaAdmin)
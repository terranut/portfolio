from django.urls import path
from portfolio import views as portfolio



urlpatterns = [
   path('', portfolio.index),
   path('cv/', portfolio.cv),
   path('contacto/', portfolio.contacto),
   path('contact/', portfolio.contact),
   
   
]

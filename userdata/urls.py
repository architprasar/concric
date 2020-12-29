
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('accountdata', views.accountdata, name="accountdata"),
    path('accountdataupdate', views.accountdataupdate, name="accountdataupdate")
]


from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('search', views.search, name="search"),
    path(
        'architect', views.architect, name="architect"),
    path(
        'cart', views.cart, name="cart"),
    path(
        'likeditems', views.likeditems, name="likeditems")

]

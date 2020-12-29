
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('registerphone', views.registerphone, name="registerphone"),
    path('verifyotp', views.verifyotp, name="registerphone"),
    path('personalinfo', views.personalinfo, name="personalinfo"),
    path('collectpersonalinfo', views.collectpersonalinfo,
         name="collectpersonalinfo"),
    path('accountlogin', views.accountlogin,
         name="accountlogin"),
    path('logout', views.logout,
         name="logout"),
    path('pimage', views.profileimage,
         name="pimage"),
    path('cimage', views.coverimage,
         name="cimage"),
    path('firebase-messaging-sw.js', views.firebaseJS,
         name="firebaseJS")
]

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.core import serializers
from .models import Usercp, Usercover
from userv1.verification import getuserid
from userv1.models import User_acess_info
from shop_products.models import Product_origin




def accountdata(request):
    if request.method == 'POST':
        if request.session.has_key('phoneno'):

            currentuser = User.objects.get(
                username=request.session['phoneno'])
            pin = User_acess_info.objects.get(
                userid=getuserid(request.session['phoneno']))
            products = serializers.serialize(
                "json", Product_origin.objects.all())

            response = {'fname': currentuser.first_name,
                        'lname': currentuser.last_name, 'email': currentuser.email, 'phoneno': currentuser.username, 'pincode': pin.pincode, 'product': products}
            if Usercp.objects.filter(userid=getuserid(request.session['phoneno'])).exists():
                u = Usercp.objects.get(
                    userid=getuserid(request.session['phoneno']))
                response['image'] = "static/images/"+str(u.profileimage)
            else:
                response['image'] = '404'
            if Usercover.objects.filter(userid=getuserid(request.session['phoneno'])).exists():
                u = Usercover.objects.get(
                    userid=getuserid(request.session['phoneno']))
                response['coverimage'] = "static/images/"+str(u.coverimage)
            else:
                response['coverimage'] = '404'
            return JsonResponse(response)

        else:
            response = {'state': '2'}
            return JsonResponse(response)
    else:
        return HttpResponse('<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>')


def accountdataupdate(request):
    if request.method == "POST":
        if request.session.has_key('phoneno'):

            currentuser = User.objects.get(username=request.session['phoneno'])
            currentuser.first_name = request.POST['fname']
            currentuser.last_name = request.POST['lname']
            currentuser.email = request.POST['email']
            currentuser.save()
            pin = User_acess_info.objects.get(
                userid=getuserid(request.session['phoneno']))
            pin.pincode = request.POST['pincode']
            pin.save()
            response = {'state': '1', 'fname': currentuser.first_name,
                        'lname': currentuser.last_name, 'email': currentuser.email, 'pincode': pin.pincode}
            return JsonResponse(response)
        else:
            response = {'state': '2'}
            return JsonResponse(response)
    else:
        return HttpResponse('<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>')

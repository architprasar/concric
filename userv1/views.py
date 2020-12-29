from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .verification import sendSMS, genrateotp, genrateuserid, getuserid
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from userdata.models import Usercp, Usercover
from .models import User_acess_info


def registerphone(request):
    if request.method == "POST":
        phonenumber = request.POST['phoneno']
        if not User.objects.filter(username=phonenumber):
            otp = str(genrateotp())
            request.session['otp'] = otp
            request.session['pseudophoneno'] = phonenumber
            response = {"state": '1', 'phoneno': otp}
            return JsonResponse(response)
        else:
            response = {'state': '5'}
            return JsonResponse(response)
    else:
        return HttpResponse("<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>")


def verifyotp(request):
    if request.method == "POST":
        otp = request.POST['otp']
        if otp == request.session['otp']:
            del request.session['otp']
            request.session['verified_state'] = True
            response = {'state': 1}
            return JsonResponse(response)

        else:
            response = {'state': 404}
            return JsonResponse(response)
    else:
        return HttpResponse("<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>")


def personalinfo(request):
    if request.session.has_key('pseudophoneno') and request.session.has_key('verified_state'):
        if request.session['verified_state']:
            return render(request, 'mobile_regestraion.html', {'phoneno': request.session['pseudophoneno']})
        else:
            return redirect('/')
    else:
        return redirect('/')


def collectpersonalinfo(request):
    if request.method == "POST":
        if request.session.has_key('pseudophoneno') and request.session.has_key('verified_state'):
            if request.session['verified_state']:
                fname = request.POST['fname']
                lname = request.POST['lname']
                email = request.POST['email']
                pincode = request.POST['pincode']
                password = request.POST['password']
                del request.session['verified_state']
                try:
                    if (fname != "" and fname.isalpha()) and (lname != "" and lname.isalpha()) and (email != "") and (pincode != "" and len(pincode) == 6 and pincode.isdigit()) and (password != ""):
                        user = User.objects.create_user(
                            username=request.session['pseudophoneno'], first_name=fname, last_name=lname, email=email, password=password, is_active=True)
                        user.save()
                        u_p_i = User_acess_info()
                        u_p_i.userlinkauthid = user.id
                        u_p_i.pincode = pincode
                        u_p_i.phoneno = request.session['pseudophoneno']
                        u_p_i.userid = genrateuserid()
                        u_p_i.save()
                        response = {'state': '1'}
                        request.session['phoneno'] = request.session['pseudophoneno']
                        return JsonResponse(response)
                    else:

                        response = {'state': '3'}
                        return JsonResponse(response)
                except:

                    return HttpResponse('k')
            else:

                response = {'state': '3'}
                return JsonResponse(response)
        else:
            response = {'state': '3'}
            return JsonResponse(response)
    else:
        return HttpResponse("<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>")


def accountlogin(request):
    if request.method == "POST":
        if not request.session.has_key('phoneno'):
            phoneno = request.POST['phoneno']
            password = request.POST['password']
            u = authenticate(username=phoneno, password=password)
            if u:
                request.session['phoneno'] = phoneno
                response = {'state': '1'}
                return JsonResponse(response)
            else:
                if User.objects.filter(username=phoneno):
                    response = {'state': '7'}
                    return JsonResponse(response)
                else:
                    response = {'state': '8'}
                    return JsonResponse(response)
        else:
            response = {'state': '1'}
            return JsonResponse(response)
    else:
        return HttpResponse("<center><h1>ERROR 404<br/>PAGE NOT FOUND</h1></center>")


def profileimage(request):
    try:
        if request.method == "POST":
            if request.FILES.get('file') != "":
                uid = getuserid(request.session['phoneno'])
                if Usercp.objects.filter(userid=uid).exists():
                    profile = Usercp.objects.get(userid=uid)
                    profile.profileimage = request.FILES.get('file')
                    profile.save()
                    response = {'status': '1',
                                'img': "static/images/"+str(profile.profileimage)}
                    return JsonResponse(response)
                else:
                    profile = Usercp()
                    profile.userid = uid
                    profile.profileimage = request.FILES.get('file')
                    profile.save()
                    response = {'status': '1'}
                    return JsonResponse(response)
            else:
                response = {'status': '404'}
                return JsonResponse(response)
    except:
        response = {'status': '404'}
        return JsonResponse(response)


def coverimage(request):
    if request.method == "POST":
        if request.FILES.get('file') != "":
            uid = getuserid(request.session['phoneno'])
            if Usercover.objects.filter(userid=uid).exists():
                profile = Usercover.objects.get(userid=uid)
                profile.coverimage = request.FILES.get('file')
                profile.save()
                response = {'status': '1',
                            'img': "static/images/"+str(profile.coverimage)}
                return JsonResponse(response)
            else:
                profile = Usercover()
                profile.userid = uid
                profile.coverimage = request.FILES.get('file')
                profile.save()
                response = {'status': '1'}
                return JsonResponse(response)
        else:
            response = {'status': '404'}
            return JsonResponse(response)


def logout(request):
    try:
        del request.session['phoneno']
        return redirect("/")
    except:
        return redirect("/")


@csrf_exempt
def firebaseJS(request):
    data = 'importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");' \
        'importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js"); ' \
        'var firebaseConfig = {' \
        '       apiKey: "AIzaSyDnedvh0AIJMopTWKJAPbPAwNE995_vBaA",' \
        '        authDomain: "concricv1.firebaseapp.com",' \
        '        databaseURL: "https://concricv1.firebaseio.com",' \
        '         projectId: "concricv1",' \
        '        storageBucket: "concricv1.appspot.com",' \
        '         messagingSenderId: "1007915377475",' \
        '       appId: "1:1007915377475:web:bee06aa750180c1c8bc5f6",' \
        '         measurementId: "G-52LLLK0R41"' \
        ' };' \
        'firebase.initializeApp(firebaseConfig);' \
        'const messaging=firebase.messaging();' \
        'messaging.setBackgroundMessageHandler(function (payload) {' \
        '    console.log(payload);' \
        '    const notification=JSON.parse(payload);' \
        '    const notificationOption={' \
        '        body:notification.body,' \
        '        icon:notification.icon' \
        '    };' \
        '    return self.registration.showNotification(payload.notification.title,notificationOption);' \
        '});'

    return HttpResponse(data, content_type="text/javascript")

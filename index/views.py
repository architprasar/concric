from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse


def routapp(request):

    if request.method == "GET":
        try:
            if request.session.has_key('phoneno'):
                return render(request, 'dash_mobilev3.html')
            else:
                return render(request, 'dash_mobilev2.html')
        except:
            return HttpResponse("Server down")
    else:
        response = {"tab": "1"}
        return JsonResponse(response)


def handler404(request, expect):

    redirect('/')

from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse

# Create your views here.


def searchresult(request):
    if request.method == "POST":
        x = request.GET['s']
        print(x)
        response = {"tab": "2"}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')

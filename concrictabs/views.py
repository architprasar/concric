from django.shortcuts import render, redirect
from django.http import JsonResponse

# Create your views here.


def search(request):
    if request.method == "POST":

        response = {"tab": "srch"}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')


def architect(request):
    if request.method == "POST":

        response = {"tab": "arc"}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')


def cart(request):
    if request.method == "POST":

        response = {"tab": "crt"}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')


def likeditems(request):
    if request.method == "POST":

        response = {"tab": "li"}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')

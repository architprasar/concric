from django.shortcuts import render
from .models import Product_origin
from django.http import JsonResponse
# Create your views here.


def product(request):
    if request.method == "POST":
        product = request.GET['p']
        product_details = Product_origin.objects.get(Product_code=product)
        print(product_details.Product_name)
        response = {"tab": "propg", "name": product_details.Product_name,
                    "mrp": product_details.Product_mrp, "company": product_details.Product_company}
        return JsonResponse(response)
    else:
        return render(request, 'dash_mobilev3.html')

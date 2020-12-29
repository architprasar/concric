from django.db import models
from userdata.models import compressImage
from .resources import genProductid


class Product_origin(models.Model):
    Product_code = models.CharField(max_length=15, blank=True)
    Product_name = models.CharField(max_length=30, null=False)
    Product_mrp = models.IntegerField(null=False)
    Product_salepercentage = models.IntegerField(blank=True)
    Product_saleprice = models.IntegerField(blank=True)
    Product_UOF = models.CharField(max_length=50)
    Product_availability = models.BooleanField(default=False)
    Product_company = models.CharField(max_length=50)
    Product_extranote = models.TextField(max_length=500, blank=True)
    Product_regestrationtime = models.TimeField(auto_now=True)

    def save(self):
        flag = True
        while flag:
            pcode = genProductid()
            if Product_origin.objects.filter(Product_code=pcode).exists():
                pass
            else:
                flag = False
                self.Product_code = pcode
        super().save()


class product_images(models.Model):
    product_img = models.ImageField(upload_to='images/products/')
    Product_code = models.CharField(max_length=15, null=False)

    def save(self):
        if not self.id:
            self.product_img = compressImage(self.product_img)
        else:
            self.product_img = compressImage(self.product_img)
        super().save()

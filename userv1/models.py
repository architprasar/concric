from django.db import models


class User_acess_info(models.Model):
    userlinkauthid = models.IntegerField(null=False)
    userid = models.CharField(max_length=10, null=False)
    phoneno = models.CharField(max_length=10)
    pincode = models.CharField(max_length=10)

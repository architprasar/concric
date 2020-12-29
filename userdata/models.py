from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys

# Create your models here.


class Usercp(models.Model):
    userid = models.CharField(max_length=10)

    profileimage = models.ImageField(upload_to='images/user')

    def save(self):
        if not self.id:
            self.profileimage = compressImage(self.profileimage)
        else:
            self.profileimage = compressImage(self.profileimage)
        super().save()


def compressImage(images):
    imageTemporary = Image.open(images)
    outputstream = BytesIO()
    imageresize = imageTemporary.resize((420, 140))
    imageTemporary.save(outputstream, format='JPEG', quality=20)
    outputstream.seek(0)
    images = InMemoryUploadedFile(outputstream, 'ImageField', "%s.jpg" % images.name.split('.')[
        0], 'image/jpeg', sys.getsizeof(outputstream), None)
    return images


class Usercover(models.Model):
    userid = models.CharField(max_length=10)
    coverimage = models.ImageField(upload_to='images/user/covers')

    def save(self):
        if not self.id:
            self.coverimage = compressImage(self.coverimage)
        else:
            self.coverimage = compressImage(self.coverimage)
        super().save()

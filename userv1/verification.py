import urllib.request
import urllib.parse
import random
from .models import User_acess_info
from django.contrib.auth.models import User


def sendSMS(number,  message):
    sender = "TXTLCL"
    apikey = "yTwoyTvNZnA-p9t8fOM2RsLfQHk8eiXqBnRmeMWHBf"
    data = urllib.parse.urlencode(
        {'apikey': apikey, 'numbers': number, 'message': message, 'sender': sender, 'test': 'true'})
    data = data.encode('utf-8')
    request = urllib.request.Request("https://api.textlocal.in/send/?")
    f = urllib.request.urlopen(request, data)
    fr = f.read()
    return(fr)


def genrateotp():
    return random.randint(100000, 999999)


def genrateuserid():
    flag = True
    while flag:
        f = str(random.randint(1, 1000000000))
        if not User_acess_info.objects.filter(userid=f).exists():
            flag = False
            return f


def getuserid(phoneno):
    user = User.objects.get(username=phoneno)
    id = user.id
    up = User_acess_info.objects.get(userlinkauthid=id)
    return up.userid

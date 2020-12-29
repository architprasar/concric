import random


def genProductid():
    lower = "abcdefghijklmnopqrstuvwxyz"
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numbers = "0123456789"
    symbols = "_"
    all = symbols + lower + upper + symbols
    length = 15
    return "".join(random.sample(all, length))

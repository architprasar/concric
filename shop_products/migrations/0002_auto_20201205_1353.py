# Generated by Django 3.0.8 on 2020-12-05 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product_origin',
            name='Product_code',
            field=models.CharField(max_length=15, null=True),
        ),
    ]

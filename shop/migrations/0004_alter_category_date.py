# Generated by Django 4.0 on 2022-01-01 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_product_discount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
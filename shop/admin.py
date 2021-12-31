from django.contrib import admin

# Register your models here.
from .models import (
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    CartProduct,
    Order,
    TrendingProduct,
)

admin.site.register([
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    CartProduct,
    Order,
    TrendingProduct,
])

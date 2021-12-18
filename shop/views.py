from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.
class CategoryProductView(APIView):
    def get(self, request):
        category_obj = Category.objects.all()
        category_serializer = CategorySerializer(category_obj, many = True).data
        arrData = []
        for cate in category_serializer:
            product_obj = Product.objects.filter(category = cate['id'])
            cate['products'] = ProductSerializer(product_obj, many = True, context={'request': request}).data
            arrData.append(cate)
        return Response(arrData)

class CategoriesView(APIView):
    def get(self, request):
        categories_obj = Category.objects.all()
        categories_serializer = CategorySerializer(categories_obj, many = True, context = {'request': request}).data
        return Response(categories_serializer)
from django.contrib import admin
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views import *

urlpatterns = [
    path('categoryproducts/', CategoryProductView.as_view()),
    path('categories/', CategoriesView.as_view()),
    path('singlecategories/<int:pk>/', SingleCategoryView.as_view()),
    path('singlebrand/<int:pk>/', SingleBrandsProducts.as_view()),
    path('singleproduct/<int:pk>/', SingleProductView.as_view()),
    path('brandsname/', BrandsNameView.as_view()),
    path('trandingproduct/', TrandingProductsView.as_view()),
    path('sliders/', SliderView.as_view()),
    path('sliders/', SliderView.as_view()),
    path('addproductview/', AddViewProduct.as_view()),
    path('mostviewproduct/', MostViewProducts.as_view()),
    path('search/<str:q>/', SearchView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('register/', RegisterUserView.as_view()),
    path('login/', obtain_auth_token),

]


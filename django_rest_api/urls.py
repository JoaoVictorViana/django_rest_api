from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import ClientViewSet

router = routers.DefaultRouter()
router.register(r'cliente', ClientViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

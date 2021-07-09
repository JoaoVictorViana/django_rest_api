from django.shortcuts import render
from api.models import Client
from rest_framework import serializers, viewsets

"""
@api {get} /api/clientes Show all Clients
@apiName getClient
@apiGroup Client

@apiSuccess {String[]} clients Lista de todos os clientes.
@apiSuccess {String} clients.first_name Primeiro nome.
@apiSuccess {String} clients.last_name Segundo nome.
@apiSuccess {Number} clients.idade Idade do Cliente.
@apiSuccess {String} clients.sexo Sexo do Cliente.
"""

"""
@api {post} /api/cliente Create Client
@apiName storeClient
@apiGroup Client

@apiParam (Client) {String} client.first_name Primeiro nome.
@apiParam (Client) {String} client.last_name Segundo nome.
@apiParam (Client) {Number} client.idade Idade do Cliente.
@apiParam (Client) {String} client.sexo Sexo do Cliente.

@apiSuccess {String} client.first_name Primeiro nome.
@apiSuccess {String} client.last_name Segundo nome.
@apiSuccess {Number} client.idade Idade do Cliente.
@apiSuccess {String} client.sexo Sexo do Cliente.
"""

"""
@api {delete} /api/cliente/:id Delete Client
@apiName destroyClient
@apiGroup Client

@apiParam (Client) {Number} client.id Identificador do Cliente.
"""

"""
@api {put} /api/cliente/:id Update Client
@apiName editClient
@apiGroup Client

@apiParam (Client) {String} client.first_name Primeiro nome.
@apiParam (Client) {String} client.last_name Segundo nome.
@apiParam (Client) {Number} client.idade Idade do Cliente.
@apiParam (Client) {String} client.sexo Sexo do Cliente.

@apiSuccess {String} client.first_name Primeiro nome.
@apiSuccess {String} client.last_name Segundo nome.
@apiSuccess {Number} client.idade Idade do Cliente.
@apiSuccess {String} client.sexo Sexo do Cliente.
"""

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['first_name', 'last_name', 'idade', 'sexo']

# ViewSets define the view behavior.
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

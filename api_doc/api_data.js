define({ "api": [
  {
    "type": "delete",
    "url": "/api/cliente/:id",
    "title": "Delete Client",
    "name": "destroyClient",
    "group": "Client",
    "parameter": {
      "fields": {
        "Client": [
          {
            "group": "Client",
            "type": "Number",
            "optional": false,
            "field": "client.id",
            "description": "<p>Identificador do Cliente.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/views.py",
    "groupTitle": "Client"
  },
  {
    "type": "put",
    "url": "/api/cliente/:id",
    "title": "Update Client",
    "name": "editClient",
    "group": "Client",
    "parameter": {
      "fields": {
        "Client": [
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.first_name",
            "description": "<p>Primeiro nome.</p>"
          },
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.last_name",
            "description": "<p>Segundo nome.</p>"
          },
          {
            "group": "Client",
            "type": "Number",
            "optional": false,
            "field": "client.idade",
            "description": "<p>Idade do Cliente.</p>"
          },
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.sexo",
            "description": "<p>Sexo do Cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.first_name",
            "description": "<p>Primeiro nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.last_name",
            "description": "<p>Segundo nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "client.idade",
            "description": "<p>Idade do Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.sexo",
            "description": "<p>Sexo do Cliente.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/views.py",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/api/clientes",
    "title": "Show all Clients",
    "name": "getClient",
    "group": "Client",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "clients",
            "description": "<p>Lista de todos os clientes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.first_name",
            "description": "<p>Primeiro nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.last_name",
            "description": "<p>Segundo nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clients.idade",
            "description": "<p>Idade do Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.sexo",
            "description": "<p>Sexo do Cliente.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/views.py",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/api/cliente",
    "title": "Create Client",
    "name": "storeClient",
    "group": "Client",
    "parameter": {
      "fields": {
        "Client": [
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.first_name",
            "description": "<p>Primeiro nome.</p>"
          },
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.last_name",
            "description": "<p>Segundo nome.</p>"
          },
          {
            "group": "Client",
            "type": "Number",
            "optional": false,
            "field": "client.idade",
            "description": "<p>Idade do Cliente.</p>"
          },
          {
            "group": "Client",
            "type": "String",
            "optional": false,
            "field": "client.sexo",
            "description": "<p>Sexo do Cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.first_name",
            "description": "<p>Primeiro nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.last_name",
            "description": "<p>Segundo nome.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "client.idade",
            "description": "<p>Idade do Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client.sexo",
            "description": "<p>Sexo do Cliente.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/views.py",
    "groupTitle": "Client"
  }
] });

# Films Api
Este es un api de films que consume un endpoint de swagger , guarda el objeto con el nombre de las propiedades traducidas 
y permite actualizarlas o borrarlas

## Stack
- serverless
- typescript
- dynamodb
- jest
- swagger

## Aquitectura
El proyecto está organizado por folderes, en un ligero uso de ddd 

## comandos

Pueden ser usados los comandos de deploy del framework serverless

`serverless deploy`

en caso de querer usarlo en local , se ha usado el plugin serverless-offline

`serverless offline start`

para ejecutar las pruebas usar

`npm test`

## Endpoints

### Get

Obtiene una objesto desde swapi y lo traduce

### Post

Guarda el objeto en la bd propia

### Put

Actualiza el objeto

### Delete

Elimina el objeto de la bd
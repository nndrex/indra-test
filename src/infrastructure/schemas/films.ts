import {Schema} from "dynamoose";

const schema  = new Schema({
    "titulo": String,
    "episodio_id": {
        "hashKey" : true,
        "type": Number
    },
    "texto_de_apertura": String,
    "director": String,
    "productor": String,
    "fecha_de_estreno": String,
    "personajes": {
        "type": Array,
        "schema": [String]
    },
    "planetas": {
        "type": Array,
        "schema": [String]
    },
    "naves_espaciales": {
        "type": Array,
        "schema": [String]
    },
    "vehiculos": {
        "type": Array,
        "schema": [String]
    },
    "especies": {
        "type": Array,
        "schema": [String]
    },
    "url": String,
    "creado": String,
    "editado": String,   
})

export default schema;
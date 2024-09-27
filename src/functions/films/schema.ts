export const schema = {
    type: "object",
    properties: {
        titulo: { type: 'string' },
        episodio_id: { type: 'number' },
        texto_de_apertura: { type: 'string' },
        director: { type: 'string' },
        productor: { type: 'string' },
        fecha_de_estreno: { type: 'string' },
        personajes: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        planetas: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        naves_espaciales: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        vehiculos: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        especies: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        creado: { type: 'string' },
        editado: { type: 'string' },
        url: { type: 'string' }


    },
    required: ['episodio_id']
};

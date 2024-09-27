export interface postFilme {       
    titulo: string;
    episodio_id: number;
    texto_de_apertura: string;
    director: string;
    productor: string;
    fecha_de_estreno: string;
    personajes: Array<string>;
    planetas: Array<string>;
    naves_espaciales: Array<string>;
    vehiculos: Array<string>;
    especies: Array<string>;
    url: string;
    creado: string;
    editado: string;    

}
export interface deleteFilme {    
    episodio_id: number;
}
import { model } from "dynamoose";
import filmSchema from "@infrastructure/schemas/films";
import { ModelType } from "dynamoose/dist/General";
import { AnyItem } from "dynamoose/dist/Item";
import IFilm from "@infrastructure/interfaces/IFilm";

export default class FilmModel{
    private filmModel:ModelType<AnyItem>;
    constructor(){
        this.filmModel = model("films",filmSchema);
    }

    getAllFilms =async () => {        
        const results = await this.filmModel.scan().exec();
        return results.count;
    }

    postFilm =async (film:IFilm) => {
        console.log('====================film model post=============');
        try{
        await this.filmModel.create(film)
        }catch(err){
            console.error(err);
        }
    }

    updateFilm = async (film:IFilm) => {
        console.log('======film model update =====')
        const episodio_idToUpdate = film.episodio_id;
        delete film.episodio_id;
        try {
            await this.filmModel.update({"episodio_id":episodio_idToUpdate},film)
        } catch (err) {
            console.error(err)
        }
    }

    deleteFilm = async (film:IFilm) => {
        console.log('======film model delete =====')
        try {
            await this.filmModel.delete({"episodio_id":film.episodio_id})
        } catch (err) {
            console.error(err)
        }
    }
}
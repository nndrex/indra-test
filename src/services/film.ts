import Film from "src/entities/film";
import { translate } from "@libs/translator";
import filmTranslation from "src/entities/filmMapper"
import Filme from "src/entities/filme";
import fetch from "node-fetch";
import FilmModel from "@infrastructure/models/filmModel";

export default class{
    private filmApiURL = 'https://swapi.py4e.com/api/films';
    private translateFilmToEspañol= (film:Film)=>{
        let translatedFilm = new Filme();
        translatedFilm = translate(film,filmTranslation,translatedFilm) as Filme;
        return translatedFilm;
    }

    private getFilmfromSwapi = async(id:number)=>{
        const response = await fetch(`${this.filmApiURL}/${id}`);
        const body = await response.json();
        const filmFromSwapi =  body as Film;
        return filmFromSwapi;
    }

    getFilmFromSwapiTranslatedById =async (id:number) => {
        const film =  await this.getFilmfromSwapi(id);
        const translatedFilm =  this.translateFilmToEspañol(film);
        return translatedFilm;

    }

    postFilm =  async(filme:Filme)=>{
        const filmModel = new FilmModel();
        await filmModel.postFilm(filme);
    }

    putFilm =  async(filme:Filme)=>{
        const filmModel = new FilmModel();
        await filmModel.updateFilm(filme);
    }
    deleteFilm =  async(filme:Filme)=>{
        const filmModel = new FilmModel();
        await filmModel.deleteFilm(filme);
    }
}
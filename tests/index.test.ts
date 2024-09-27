import {translate} from '../src/libs/translator'
import mapper from "../src/entities/filmMapper";
import Film from '../src/entities/film'
import Filme from '../src/entities/filme'
import * as FilmTest from './data/filmTest.json'
import * as FilmeTest from './data/filmeTest.json'

describe('Test translated function',()=>{
    test('translate film test',()=>{
        const film = FilmTest as Film;
        let filme = FilmeTest as Filme;
        let filmTranslated = new Filme();
        filmTranslated = translate(film,mapper,filmTranslated) as Filme;
        expect(filmTranslated).toEqual(filme);
    })
})
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';
import FilmService from '@services/film'
import Filme from '@entities/filme';
import{schema} from './schema'


export const getfilmbyId = middyfy( async (event:APIGatewayProxyEvent) => {
  const filmService = new FilmService();
  const filmTranslated = await filmService.getFilmFromSwapiTranslatedById(Number(event.pathParameters.id));
  console.log('============= handler film translated =============')
  console.dir(filmTranslated);
  return formatJSONResponse({
     filmTranslated
  });
});
const saveFilm:ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log('post start')
  const filmService = new FilmService();
  const filmToSaved = event.body as Filme;
  await filmService.postFilm(filmToSaved);
  console.log('============= handler film post post =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
};
const updateFilm:ValidatedEventAPIGatewayProxyEvent<typeof schema> =  async (event) => {
  const filmService = new FilmService();
  const filmToSaved = event.body as Filme;
  await filmService.putFilm(filmToSaved);
  console.log('============= hanlder film put =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
};
const eraseFilm:ValidatedEventAPIGatewayProxyEvent<typeof schema> =  async (event) => {
  const filmService = new FilmService();
  const filmToSaved = event.body as Filme;
  await filmService.deleteFilm(filmToSaved);
  console.log('============= handler film delete =============')
  console.dir(filmToSaved);
  return formatJSONResponse({
     message:'function executed succesfully'
  });
};

export const postFilm = middyfy(saveFilm);
export const putFilm = middyfy(updateFilm)
export const deleteFilm = middyfy(eraseFilm);

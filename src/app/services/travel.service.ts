import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  travelDetails = [
    {
      id: 1,
      country:"Noruega",
      city:"Oslo",
      description:"Passeio turístico em Oslo - Noruega",
      pricePackage:16000,
      typicalFood:"Brunost",
      travelImg:"https://lp-cms-production.imgix.net/2023-03/shutterstock_1879262575.jpg",
      descriptionImg:"Imagem de Oslo"
    },
    {
      id: 2,
      country:"Polônia",
      city:"Varsóvia",
      description:"Passeio turístico em Varsóvia - Polônia",
      pricePackage:13000,
      typicalFood:"Pierogi",
      travelImg:"https://elquarto.com/blog/wp-content/uploads/2023/08/varsovia-capa.jpg",
      descriptionImg:"Imagem de Varsóvia"
    },
    {
      id: 3,
      country:"Brasil",
      city:"Rio de Janeiro",
      description:"Passeio turístico em Rio de Janeiro - Brasil",
      pricePackage:2000,
      typicalFood:"Feijoada",
      travelImg:"https://www.temporadalivre.com/uploads/editor/pictures/2422bd0cd4d2/content_landscape-4430276_1280.jpg",
      descriptionImg:"Imagem de Rio de Janeiro"
    },
    {
      id: 4,
      country:"Japão",
      city:"Shibuya",
      description:"Passeio turístico em Shibuya - Japão",
      pricePackage:15000,
      typicalFood:"Sushi",
      travelImg:"https://www.japan-guide.com/g18/3007_01.jpg",
      descriptionImg:"Imagem de Shibuya"
    },
    {
      id: 5,
      country:"Argentina",
      city:"Buenos Aires",
      description:"Passeio turístico por Buenos Aires - Argentina",
      pricePackage:5600,
      typicalFood:"Bife de Chorizo",
      travelImg:"https://aguiarbuenosaires.com/wp-content/uploads/2015/10/Obelisco-Mapa-de-Buenos-Aires-Foto-Wikipedia2.jpg",
      descriptionImg:"Imagem de Buenos Aires"
    },
    {
      id: 6,
      country:"Austrália",
      city:"Sydney",
      description:"Passeio turístico por Sydnei - Austrália",
      pricePackage:30000,
      typicalFood:"Pavlova",
      travelImg:"https://australiabrasil.com.br/wp-content/uploads/sites/2/2021/06/sydney-1-2.jpg",
      descriptionImg:"Imagem de Sydnei"
    },
  ]
}

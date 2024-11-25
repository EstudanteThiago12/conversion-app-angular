import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }

  converterMoeda(moeda: String) {
    return axios.get('https://economia.awesomeapi.com.br/json/last/' + moeda);
  }

}

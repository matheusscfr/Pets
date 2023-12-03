import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pets-interface';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private apiUrl = 'http://petstore-demo-endpoint.execute-api.com/petstore/pets/';


  constructor(private http: HttpClient) {
  }

 //Consumo da API
  consumirPets() {
    return this.http.get<Pet[]>(this.apiUrl);
  }

 
}



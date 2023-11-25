import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://petstore-demo-endpoint.execute-api.com/petstore/pets/';


  constructor(private http: HttpClient) {
  }


  consumirPets() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

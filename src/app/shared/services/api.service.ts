import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDigimons(){
    return this.http.get('https://www.digi-api.com/api/v1/digimon')
  }
}

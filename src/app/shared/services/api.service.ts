import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
 

  paginator: any = {
    page: 0
  }
 api_url: string = 'https://www.digi-api.com/api/v1/digimon';
  constructor(private http: HttpClient) { }

  getDigimons(){
    return this.http.get(`${this.api_url}?page=${this.paginator.page}`)
  }

  getDigimon(id: any){

    return this.http.get(`${this.api_url}/${id}`);

  }

  setPage(page: number){
    this.paginator.page = page;

  }

  setMaxPage(page:number){
    this.paginator = {...this.paginator, maxPage: page}
  }

  getPage(){
    return this.paginator.page;
  }

  getMaxPage(){
    return this.paginator.maxPage;
  }
}

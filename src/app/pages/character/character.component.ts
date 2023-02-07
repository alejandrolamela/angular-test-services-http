import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit{
  listado!: any[];
  page!:number;
 

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.page = this.api.getPage()
    this.api.getDigimons().subscribe((data: any)=>{
      this.listado = [...data.content];
      this.api.setPage(data.pageable.currentPage)
      this.api.setMaxPage(data.pageable.totalPages)
      console.log(data)
    })
  }

  changePage(page: number){
    this.api.setPage(page)
    this.api.getDigimons().subscribe((data:any)=> {
      this.listado = [...data.content]
      console.log(data)
    })
  }

}

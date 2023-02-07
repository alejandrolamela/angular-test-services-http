import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit{
  listado!: any[];

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.api.getDigimons().subscribe((data: any)=>{
      this.listado = [...data.content];

     

    })
  }

}

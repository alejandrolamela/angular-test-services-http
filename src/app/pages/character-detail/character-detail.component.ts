import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit{
  id?: any;
  digimon: any;
// Cuando quiero el valor del id tengo que traerme siempre activated route 
  constructor(private api:ApiService, private activetedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activetedRoute.paramMap.subscribe((params)=> {
      this.id = params.get('id');
    })

    this.api.getDigimon(this.id).subscribe((data)=> {
      console.log(data);
      this.digimon = data;
    })
  }

}

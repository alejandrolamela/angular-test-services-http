import { ApiService } from './../../services/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{

  @Output() change = new EventEmitter();

  page! : number; 
  maxPage: number=1;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.page = this.api.getPage()
    
  }

  changePage(newPage: number){
    // this.api.setPage(newPage)
    this.change.emit(newPage);
    this.page = this.api.getPage()
    this.maxPage = this.api.getMaxPage()

  

  }


}

import { Component, OnInit } from '@angular/core';

import { DataService } from '../../service/data.service';

@Component({
  selector: 'ge-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strSearch: string;

  constructor( public data: DataService ) { }

  ngOnInit() {
    this.strSearch = '';
  }

  searchClick(e) {
    e.preventDefault();
    // this.data.changeMyLoad(true);
    // this.data.changeBusqueda(this.strSearch);

    this.data.showLoad$.emit(true);
    this.data.strBusqueda$.emit(this.strSearch);
  }

}

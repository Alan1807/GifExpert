import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifexpertService } from '../../service/gifexpert.service';
import { Gif } from '../../model/gif';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ge-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit, OnDestroy {
  gifList: Gif[];
  busqueda: string = '';
  showLoader = false;
  loadSubs: Subscription;
  searchSubs: Subscription;

  constructor( private gifService: GifexpertService, public data: DataService ) { }

  ngOnInit() {
    this.loadSubs = this.data.showLoad$.subscribe( show => {
      this.showLoader = show;
    });

    this.searchSubs = this.data.strBusqueda$.subscribe( str => {
      this.gifList = [];
      this.busqueda = str;
      this.getGifs(this.busqueda);
    });
  }

  ngOnDestroy() {
    this.gifList = [];
    this.loadSubs.unsubscribe();
    this.searchSubs.unsubscribe();
  }

  async getGifs(desc: string) {
    await this.gifService.getGifs(desc).then( gifs => this.gifList = gifs['data']);
    this.data.showLoad$.emit(false);
  }

}
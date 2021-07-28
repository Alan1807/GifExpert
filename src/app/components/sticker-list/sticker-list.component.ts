import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifexpertService } from '../../service/gifexpert.service';
import { DataService } from '../../service/data.service';
import { Gif } from '../../model/gif';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ge-sticker-list',
  templateUrl: './sticker-list.component.html',
  styleUrls: ['./sticker-list.component.css']
})
export class StickerListComponent implements OnInit, OnDestroy {
  // stickerList: Gif[];
  stickerList: Observable<Gif[]>;
  busqueda = '';
  showLoader = false;
  loadSubs: Subscription;
  searchSubs: Subscription;

  constructor( private stickerService: GifexpertService, public data: DataService ) { }

  ngOnInit() {
    this.loadSubs = this.data.showLoad$.subscribe( show => {
      this.showLoader = show;
    });

    this.searchSubs = this.data.strBusqueda$.subscribe( str => {
      this.busqueda = str;
      this.getStickers(this.busqueda);
    });
  }

  ngOnDestroy() {
    this.loadSubs.unsubscribe();
    this.searchSubs.unsubscribe();
  }

  ///////PRUEBA DE ASYNC AND AWAIT
  // async getStickers(desc: string) {
  //   await this.stickerService.getStickers(desc).then( resp => this.stickerList = resp['data'] );
  //   this.data.changeMyLoad(false);
  // }

  getStickers(desc: string) {
    this.showLoader;
    this.stickerList = this.stickerService.getStickers(desc);
    this.data.showLoad$.emit(false);
  }

}

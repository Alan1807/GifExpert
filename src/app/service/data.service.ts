import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  strBusqueda$ = new EventEmitter<string>();
  showLoad$ = new EventEmitter<boolean>();

  // private strBusqueda = new BehaviorSubject<string>("");
  // private showLoad = new BehaviorSubject<boolean>(false);

  // changeVal = this.strBusqueda.asObservable();
  // changeLoad = this.showLoad.asObservable();

  // changeBusqueda (str: string) {
  //   this.strBusqueda.next(str)
  // }

  // changeMyLoad (show: boolean) {
  //   this.showLoad.next(show);
  // }

  constructor() { }

}

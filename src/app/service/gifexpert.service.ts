import { Injectable } from '@angular/core';
import { Gif } from '../model/gif';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GifexpertService {

  private limit = 20;

  constructor( private http: HttpClient ) { }

  // getGifs(desc: string): Observable<Gif[]> {
  //   const opts = { params: new HttpParams({fromString: "q=" + desc + "&limit=" + this.limit + "&api_key=" + environment.gifKey}) };
  //   return this.http.get<Gif[]>(environment.gifUrl, opts).map(resp => resp as Gif[]);
  // }

  async getGifs(desc: string) {
    const opts = { 
      params: new HttpParams(
        {
          fromString: "q=" + desc + "&limit=" + this.limit + "&api_key=" + environment.gifKey
        }
      ) 
    };
    const resp = await this.http.get<Gif[]>(environment.gifUrl, opts).toPromise();
    return resp;
  }

  ////////// PRUEBA DE ASYNC AWAIT
  // async getStickers(desc: string) {
  //   const opts = {
  //     params: new HttpParams(
  //       {
  //         fromString: "q=" + desc + "&limit=" + this.limit + "&api_key=" + environment.gifKey
  //       }
  //     )
  //   };
  //   const resp = await this.http.get<Gif[]>(environment.stickerUrl, opts).toPromise();
  //   return resp;
  // }

  getStickers(desc: string) {
    const opts = {
      params: new HttpParams(
        {
          fromString: "q=" + desc + "&limit=" + this.limit + "&api_key=" + environment.gifKey
        }
      )
    };
    return this.http.get<Gif[]>(environment.stickerUrl, opts);
  }

}

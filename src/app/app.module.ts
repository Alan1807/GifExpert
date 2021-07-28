import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { CommonModule } from '@angular/common';
import { StickerListComponent } from './components/sticker-list/sticker-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gifs'
  },
  {
    path: 'gifs',
    component: GifListComponent
  },
  {
    path: 'stickers',
    component: StickerListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GifListComponent,
    StickerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './elements/nav/nav.component';
import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AlbumsService } from './albums/albums.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    AlbumsComponent,
    AlbumComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

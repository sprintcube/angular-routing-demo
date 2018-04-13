import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from './album/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

private albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumsService.getAlbums();
    console.log(this.albums);
  }

}

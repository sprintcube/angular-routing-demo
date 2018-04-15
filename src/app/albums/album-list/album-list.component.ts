import { Component, OnInit } from '@angular/core';
import { Album } from '../album/album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumsService.getAlbums();
  }

}

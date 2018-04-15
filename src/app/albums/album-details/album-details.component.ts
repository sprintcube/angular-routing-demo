import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album/album';
import { Data, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  private album: Album;
  private photos = <any>[];

  constructor(private albumService: AlbumsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.album = this.albumService.getAlbum(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.album = this.albumService.getAlbum(+params['id']);
          this.photos = this.albumService.getAlbumPhotos(+params['id'])
          .subscribe(photos => this.photos = photos);
        }
      );
  }

}

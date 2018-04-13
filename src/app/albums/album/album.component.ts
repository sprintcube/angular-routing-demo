import { Component, OnInit, Input } from '@angular/core';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;

  constructor() { }

  ngOnInit() {
  }

}

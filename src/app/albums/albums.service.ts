import { Injectable } from '@angular/core';
import { Album } from './album/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albums: Album[] = [];

  constructor() {
    this.albums.push({
      id: 1,
      name: 'Birds',
      description: 'A collection of beautiful photos of birds.',
      image: 'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_640.jpg'
    });

    this.albums.push({
      id: 2,
      name: 'Mountains',
      description: 'A collection of beautiful photos of mountains.',
      image: 'https://cdn.pixabay.com/photo/2018/04/07/01/44/snow-3297561_640.jpg'
    });

    this.albums.push({
      id: 3,
      name: 'Cities',
      description: 'A collection of beautiful photos of cities.',
      image: 'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_640.jpg'
    });
  }

  /**
   * Get the albums
   */
  getAlbums() {
    return this.albums;
  }

  /**
   * Get the single album by id
   * @param id number
   */
  getAlbum(id: number) {
    const album = this.albums.find(
      (a) => {
        return a.id === id;
      }
    );
    return album;
  }
}

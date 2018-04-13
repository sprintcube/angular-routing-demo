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
      description: 'Photos of birds.',
      image: '/assets/img/birds.jpeg'
    });

    this.albums.push({
      id: 2,
      name: 'Mountains',
      description: 'Photos of mountains.',
      image: '/assets/img/mountains.jpeg'
    });

    this.albums.push({
      id: 3,
      name: 'Cities',
      description: 'Photos of cities.',
      image: '/assets/img/cities.jpeg'
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

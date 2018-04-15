import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Album } from './album/album';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albums: Album[] = [];

  constructor(private http: HttpClient) {
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

  getAlbumPhotos(id: number): Observable<any> {
    let url = 'https://pixabay.com/api/?image_type=photo&per_page=12&orientation=horizontal';
    url += '&key=' + environment.pixabayApiKey;

    const album = this.getAlbum(id);
    if (album) {
      url += '&q=' + album.name;
      return this.http.get(url)
      .pipe(
        map(response => {
          if (response['hits']) {
            const photos = response['hits'].map(photo => {
              return {
                imgUrl: photo.webformatURL,
                pageURL: photo.pageURL
              };
            });
            return photos;
          } else {
            return [];
          }
        }),
        catchError(this.handleError('getAlbumPhotos'))
      );
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}

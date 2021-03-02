import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import { MovieDetails } from './entities/movie-details';

@Injectable()
export class DetailsService {

  // TheMovieDB API endpoint for geting movie details
  private detailsUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'api_key=b2000054e469cfa7dd6ee85e1f544007';

  constructor(private http: HttpClient) {}

  private mockDetailsPath = '../../assets/movie-details-example.json';
  private genrePath = '../../assets/genres.json';

    // get movie details matching by id
  public movieDetailsAPI(id: number): Observable<MovieDetails> {

    return this.http.get<MovieDetails>(this.detailsUrl + id + '?' + this.apiKey);
  }

  public movieDetailsMockAPI(): Observable<MovieDetails> {

    return this.http.get<MovieDetails>(this.mockDetailsPath);
  }

  // get genre names JSON from file
  public getGenres(): Observable<Genres> {

    return this.http.get<Genres>(this.genrePath);
  }
}

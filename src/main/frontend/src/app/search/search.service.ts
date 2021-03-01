import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchService {

  // TheMovieDB API endpoint for searching movies
  private searchUrl =
    'https://api.themoviedb.org/3/search/movie?api_key=b2000054e469cfa7dd6ee85e1f544007&query=';

  constructor(private http: HttpClient) {}

  private mockSearchPath = '../../assets/search-example.json';
  private genrePath = '../../assets/genres.json';

    // get list of movies matching by name
  public searchAPI(title: string): Observable<Search> {

    return this.http.get<Search>(this.searchUrl + title);
  }

  // get genre names JSON from file
  public getGenres(): Observable<Genres> {

    return this.http.get<Genres>(this.genrePath);
  }

  public searchMockAPI(): Observable<Search> {

    return this.http.get<Search>(this.mockSearchPath);
  }
}

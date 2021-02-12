import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchService {
  // TheMovieDB API endpoint for searching movies
  private query: string = 'Star+Wars';
  private searchUrl =
    'https://api.themoviedb.org/3/search/movie?api_key=b2000054e469cfa7dd6ee85e1f544007&query=';

    // private search: Search;
    private mock_search: Search;

    // get list of movies matching by name
  public searchAPI(title: string): Observable<Search> {


    return this.http.get<Search>(this.searchUrl + title);
    // for testing
    // return of(this.mock_search);
  }

  constructor(private http: HttpClient) {
    this.mock_search = {
      'page': 1,
      'results': [
        {
          'adult': false,
          'backdrop_path': '/k7h4RNAarfOrF2r2YMN0P2FQSr4.jpg',
          'genre_ids': [80, 18, 53, 28],
          'id': 75780,
          'original_language': 'en',
          'original_title': 'Jack Reacher',
          // tslint:disable-next-line: max-line-length
          'overview': 'When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note: "Get Jack Reacher!" So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.',
          'popularity': 39.476,
          'poster_path': '/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg',
          'release_date': '2012-12-20',
          'title': 'Jack Reacher',
          'video': false,
          'vote_average': 6.5,
          'vote_count': 5076
        },
        {
          'adult': false,
          'backdrop_path': '/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg',
          'genre_ids': [28],
          'id': 343611,
          'original_language': 'en',
          'original_title': 'Jack Reacher: Never Go Back',
          // tslint:disable-next-line: max-line-length
          'overview': 'Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.',
          'popularity': 40.577,
          'poster_path': '/wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg',
          'release_date': '2016-10-19',
          'title': 'Jack Reacher: Never Go Back',
          'video': false,
          'vote_average': 5.7,
          'vote_count': 3454
        }
      ],
      'total_pages': 1,
      'total_results': 2
    };
  }
}

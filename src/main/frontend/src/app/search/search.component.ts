import { SearchService } from './search.service';
import { Component, Input, OnInit } from '@angular/core';

import { GenreHandler } from './genreHandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public search: Search;
  public results: Result[];

  // search string from a user input
  public searchTitle: string;
  public baseImageUrl = 'https://image.tmdb.org/t/p/w154';

  public genreNames: string[];
  public genreMap;
  private genreHandler: GenreHandler;

  constructor(private searchService: SearchService, private router: Router) {}

  public searchMovies() {
    this.searchService.searchAPI(this.searchTitle).subscribe((data) => {
      this.search = data;
      this.results = data.results;
    });
  }

  private searchMockMovies() {
    this.searchService.searchMockAPI().subscribe((data) => {
      this.search = data;
      this.results = data.results;

    });
  }

  public getGenreSearch(ids: number[]): string {
    return this.genreHandler.getGenresForSearch(ids);
  }

  public showMovieDetail(movieId: number) {

    this.router.navigate(['/details', movieId]);
  }

  ngOnInit() {

    /// Get movie genres from file
    this.searchService.getGenres().subscribe((genreMapJSON) => {
      this.genreHandler = GenreHandler.getInstance(genreMapJSON);
    });

    // for testing
    this.searchMockMovies();
  }
}

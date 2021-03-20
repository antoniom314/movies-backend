
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { GenresService } from '../genres/genres.service';
import { Result, Search } from './search';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  // public marginProperty = 'ml-auto';

  public search: Search;
  public results: Result[];

  // search string from a user input
  public searchString = '';
  public baseImageUrl = 'https://image.tmdb.org/t/p/w154';

  constructor(private searchService: SearchService,
    private genresService: GenresService,
    private activeRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    // Get movie details with id prametar passed from a search component
    this.activeRoute.queryParams.subscribe((string) => {
      this.searchString = string['search'];
      if (this.searchString) {

        this.searchMovies(this.searchString);
      }
    });
    // for testing
    // this.searchMockMovies();
  }

  public showMovieDetail(movieId: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: movieId,
        search: this.searchString
      }
    };
    const relativePath = '/details/' + movieId;
    // Go to details page and pass to ActiveRoutes id parametar
    // and search string for back button
    this.router.navigate([relativePath], navigationExtras);
  }

  public searchMovies(search: string) {

    if (this.searchString) {
      this.searchService.searchAPI(this.searchString).subscribe((data) => {
        this.search = data;
        this.results = data.results;
      });
    }
  }

  private searchMockMovies() {
    this.searchService.searchMockAPI().subscribe((data) => {
      this.search = data;
      this.results = data.results;
    });
  }

  public getGenreSearch(ids: number[]): string {
    return this.genresService.getGenresForSearch(ids);
  }

}

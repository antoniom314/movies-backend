import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { title } from 'process';
import { GenreHandler } from '../search/genreHandler';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movieDetails: MovieDetails;

  public baseImageUrl = 'https://image.tmdb.org/t/p/w342';
  public chousedMovieId: number;
  // TODO Try to make injectable GenreHandlere
  private genreHandler: GenreHandler;

  constructor(private detailsService: DetailsService, private activeRoutes: ActivatedRoute) { }

  public getMovieDetails(movieId: number) {
    this.detailsService.movieDetailsAPI(movieId).subscribe((data) => {
      this.movieDetails = data;
    });
  }

  private getMockMovieDetails() {
    this.detailsService.movieDetailsMockAPI().subscribe((data) => {
      this.movieDetails = data;
    });
  }

  public getGenreDetails(ids: GenreIds[]): string {

    return this.genreHandler.getGenresForDetails(ids);
  }

  ngOnInit() {

    /// Get movie genres from file
    this.detailsService.getGenres().subscribe((genreMapJSON) => {
      this.genreHandler = GenreHandler.getInstance(genreMapJSON);
    });

    // Get movie details with id from a movie search result
    this.activeRoutes.params.subscribe(string => {
      this.getMovieDetails(string['id']);
    });

    // For testing
    // this.getMockMovieDetails();
  }
}

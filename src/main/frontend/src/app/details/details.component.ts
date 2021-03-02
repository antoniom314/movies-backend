import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { title } from 'process';
import { ReviewService } from '../review/review.service';
import { GenreHandler } from '../search/genreHandler';
import { DetailsService } from './details.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DatePipe]
})
export class DetailsComponent implements OnInit {

  public movieDetails: MovieDetails;

  public baseImageUrl = 'https://image.tmdb.org/t/p/w342';
  public chousedMovieId: number;
  public reviewText: string;

  public showTextArea = false;
  public showRecommendButton = true;
  private genreHandler: GenreHandler;

  private date: Date;

  constructor(private detailsService: DetailsService,
    private reviewService: ReviewService,
    private activeRoutes: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

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

  public openRecommendation () {

    this.showTextArea = !this.showTextArea;
    // this.showRecommendButton = false;
  }

  public postRecommendation () {
    this.showTextArea = false;
    // Get current day string
    const date = new Date();
    const dateString: string = this.datePipe.transform(date, 'dd MM yyyy');

    const review = {'id': 0,
    'title': this.movieDetails.title,
    'imagePath': this.movieDetails.poster_path,
    // tslint:disable-next-line: max-line-length
    'text': this.reviewText,
    'date': dateString};


    this.reviewService.save(review).subscribe();
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

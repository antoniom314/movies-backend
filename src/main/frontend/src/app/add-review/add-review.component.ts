import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Review } from '../review/review';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  public showCard = true;
  public showLogin = false;
  public reviewText = '    ';

  public user = 'user';
  public password = 'user';
  public loginError: string;

  public review: Review;
  // Movie TMDB id geted from DetailsComponent
  public movieIdTMDB: string;
  private searchString: string;
  public baseImageUrl = 'https://image.tmdb.org/t/p/w154';

  constructor(
    private reviewService: ReviewService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Getprametars passed from a details component
    this.activeRoute.queryParams.subscribe((params) => {
      this.movieIdTMDB = params['movieId'];
      this.searchString = params['search'];

      console.log(params['date']);


      this.review = {
        id: -1,
        title: params['title'],
        // Text is not deffined yet
        text: this.reviewText,
        genre: params['genre'],
        imagePath: params['imagePath'],
        date: params['date']
      };
    });
  }

  public goBack() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.movieIdTMDB,
        search: this.searchString
      },
    };
    const relativePath = '/details/' + this.movieIdTMDB;
    this.router.navigate([relativePath], navigationExtras);
  }

  public postRecommendation() {
    this.showCard = false;
    this.showLogin = true;
  }

  public submitForm() {
    this.review.text = this.reviewText;
    this.reviewService.postReview(this.review, this.user, this.password)
      .subscribe(
        (data) => {
          if (data) {
            this.router.navigate(['/review']);
            this.showCard = true;
            this.showLogin = false;
          }
        },
        (error) => {
          this.handleHTTPError(error);
        }
      );
  }

  private handleHTTPError(err: any) {
    switch (err.status) {
      case 401:
        this.showCard = false;
        this.showLogin = true;
        this.loginError = 'Bad pasword or user name';
        break;
      case 403:
        this.showCard = false;
        this.showLogin = true;
        this.loginError = 'Unauthorized user';
        break;
    }
  }
}

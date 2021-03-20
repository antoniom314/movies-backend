import { Component, OnInit } from '@angular/core';
import { Review } from './review';

import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews: Review[];
  public baseImageUrl = 'https://image.tmdb.org/t/p/w300';

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  private getReviews() {
    this.reviewService.getAllReviews().subscribe(data => {
      this.reviews = data.reverse();
    });
  }
}

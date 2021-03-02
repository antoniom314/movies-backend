import { Component, OnInit } from '@angular/core';

import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews: Review[];

  public baseImageUrl = 'https://image.tmdb.org/t/p/w154';

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {

    this.reviewService.findAll().subscribe(data => {

      this.reviews = data.reverse();
    });
  }

}

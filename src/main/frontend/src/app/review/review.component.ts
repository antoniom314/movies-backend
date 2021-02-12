import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Review } from './review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {

    this.reviewService.findAll().subscribe(data => {

      this.reviews = data;
    });
  }

}

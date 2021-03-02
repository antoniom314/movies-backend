import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReviewService {

  private reviewUrl = 'http://localhost:8080/api/review';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl);
  }

  public save(review: Review) {
    return this.http.post<Review>(this.reviewUrl, review);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Review } from './review';

@Injectable()
export class ReviewService {

  private getReviewsUrl = 'http://localhost:8080/api/get_reviews';
  private getReviewByIdUrl = 'http://localhost:8080/api/get_review';
  private postReviewUrl = 'http://localhost:8080/api/add_review';
  private editReviewUrl = 'http://localhost:8080/api/edit_review';
  private deleteReviewUrl = 'http://localhost:8080/api/delete_review';

  constructor(private http: HttpClient) { }

  public getAllReviews(): Observable<Review[]> {
    const resetCache = 'true';
    const headers = new HttpHeaders({resetCache, observe: 'response' });

    return this.http.get<Review[]>(this.getReviewsUrl, {headers});
  }

  public getReviewById(id: number, user: string, password: string): Observable<Review> {
    const resetCache = 'false';
    const headers = new HttpHeaders({resetCache, observe: 'response' });

    return this.http.get<Review>(this.getReviewByIdUrl + '/' + id, {headers});
  }

  public postReview(review: Review, user: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '
     + btoa(user + ':' + password) });

    return this.http.post<Review>(this.postReviewUrl, review, {headers});
  }

  public editReview(review: Review, id: number, user: string, password: string): Observable<Review> {
    const headers = new HttpHeaders({Authorization: 'Basic '
     + btoa(user + ':' + password) });

    return this.http.put<Review>(this.editReviewUrl + '/' + id, review, {headers});
  }

  public deleteReview(id: number, user: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '
     + btoa(user + ':' + password) });

    return this.http.delete<Review>(this.deleteReviewUrl + '/' + id, {headers});
  }
}

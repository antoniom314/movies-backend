
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewService } from './review/review.service';
import { SearchService } from './search/search.service';
import { DetailsService } from './details/details.service';
import { GenresService } from './genres/genres.service';
import { CacheInterceptor } from './cache.interceptor';
import { AutofocusDirective } from './autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    SearchComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AddReviewComponent,
    AdminComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ReviewService,
    SearchService,
    DetailsService,
    GenresService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

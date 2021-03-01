import { ReviewService } from './review/review.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchService } from './search/search.service';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    SearchComponent,
    PageNotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ReviewService, SearchService, DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

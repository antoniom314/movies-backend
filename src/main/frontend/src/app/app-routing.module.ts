import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { ReviewComponent } from './review/review.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'review', component: ReviewComponent},
  { path: 'search', component: SearchComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'add-review', component: AddReviewComponent},
  { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: 'review', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

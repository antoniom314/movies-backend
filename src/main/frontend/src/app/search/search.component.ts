import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: Search;
  public results: Result[];

  // search string from a user input
  public searchTitle: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    // this.searchService.searchAPI().subscribe(data => {

    //   this.search = data;
    //   this.results = this.search.results;
    // });
  }

  public searchMovies(){

    this.searchService.searchAPI(this.searchTitle).subscribe(data => {
      this.search = data;
      this.results = this.search.results;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-after-search',
  templateUrl: './after-search.component.html',
  styleUrls: ['./after-search.component.scss']
})
export class AfterSearchComponent implements OnInit {
  isSearched: boolean;
  inputText: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchText(text: string) {
    this.inputText = text;
    if(this.inputText.length !== 0) {
      this.isSearched = true;
      this.router.navigate(['search']);
    }
  }

}

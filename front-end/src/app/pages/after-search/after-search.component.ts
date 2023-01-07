import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
  }

}

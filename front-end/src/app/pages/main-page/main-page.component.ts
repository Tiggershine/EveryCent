import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isSearched: boolean;
  inputText: string;
  searched: boolean;

  constructor() {}

  ngOnInit(): void {
  }
  
  searchText(text: string) {
    this.inputText = text;
    this.isSearched = (this.inputText.length !== 0);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styles: [
  ]
})
export class HearderComponent implements OnInit {

  recherche: string = ' ';
  constructor() { }

  ngOnInit(): void {
  }

}

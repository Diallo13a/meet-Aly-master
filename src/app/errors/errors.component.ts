import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  errorsMessage: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorsMessage = this.route.snapshot.data['message'];
  }

}

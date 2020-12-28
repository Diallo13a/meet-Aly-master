import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Bien } from '../Bien';
import { BienService } from '../bien.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  search: string = '';
  biens: Bien[];

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
      this.biens = this.bienService.getAllBiens();
  }

}

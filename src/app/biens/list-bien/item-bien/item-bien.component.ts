import { Component, Input, OnInit } from '@angular/core';
import { UtilesService } from 'src/app/utiles.service';
import { Bien } from '../../Bien';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

  @Input() b : Bien;
  //oubien
 // @Input('bien') bien : Bien;

  constructor(private UtilesService: UtilesService) { }

  ngOnInit(): void {
  }

  clicSurBouton() {
    alert('Vous venez de cliquer sur le bouton');
  }
}

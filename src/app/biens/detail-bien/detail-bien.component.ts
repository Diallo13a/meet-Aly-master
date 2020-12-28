import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BienService} from '../bien.service';
import {Bien} from '../Bien';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
  bien: Bien;
  constructor(private route: ActivatedRoute, private biensService: BienService) { }

  ngOnInit(): void {
    const idBien = +this.route.snapshot.params['id'];
    this.bien = this.biensService.getBienById(idBien);
    // for next time that component will be loaded
    this.route.params
      .subscribe(
        (p) => {
          const idBien = +p['id'];
          this.bien = this.biensService.getBienById(idBien);
        }
      );
  }

}

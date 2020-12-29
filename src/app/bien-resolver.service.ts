import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Bien} from './biens/Bien';
import {BienService} from './biens/bien.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien>{

  constructor(private bienService: BienService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    return this.bienService.getBienById(+route.params['id']);
  }
}

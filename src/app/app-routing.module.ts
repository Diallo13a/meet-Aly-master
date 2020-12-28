import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBienComponent} from './biens/list-bien/list-bien.component';
import {AddBienComponent} from './biens/add-bien/add-bien.component';
import {DetailBienComponent} from './biens/detail-bien/detail-bien.component';
import {ReservationsBienComponent} from './biens/reservations-bien/reservations-bien.component';
import {EditReservationComponent} from './reservations-bien/edit-reservation/edit-reservation.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBienComponent},
  {path: 'biens/add', component: AddBienComponent},
  {path: 'biens/:id', component: DetailBienComponent},

  {
    path: 'reservations',
    component: ReservationsBienComponent,
    children: [
      {path: ':id', component: DetailBienComponent},
      {path: ':id/edit', component: EditReservationComponent},
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

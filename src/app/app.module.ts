import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HearderComponent } from './hearder/hearder.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbutrumComponent } from './biens/jumbutrum/jumbutrum.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SearchPipe } from './pipes/search.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ReservationsBienComponent } from './biens/reservations-bien/reservations-bien.component';
import {EditReservationComponent} from './reservations-bien/edit-reservation/edit-reservation.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './connexion/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HearderComponent,
    BiensComponent,
    AddBienComponent,
    ListBienComponent,
    DetailBienComponent,
    ItemBienComponent,
    JumbutrumComponent,
    SeparatorPipe,
    TimeleftPipe,
    SearchPipe,
    ReservationsBienComponent,
    ErrorsComponent,
    ConnexionComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  //  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

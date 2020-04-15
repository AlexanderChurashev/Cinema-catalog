import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';
import { CinemaItemComponent } from './components/cinema-item/cinema-item.component';
import { CinemaDetailsComponent } from './components/cinema-details/cinema-details.component';
import {RouterModule} from '@angular/router';
import { CinemaListFilterComponent } from './components/cinema-list-filter/cinema-list-filter.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes = [
  {path: '', component: CinemaListComponent},
  {path: 'cinema/:id', component: CinemaDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    CinemaItemComponent,
    CinemaDetailsComponent,
    CinemaListFilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremisesSearchComponent } from './premises-search/premises-search.component';
import { PremisesCardComponent } from './premises-card/premises-card.component';
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes =[
  { path: '', component: PremisesSearchComponent },
  { path: 'card/:id', component: PremisesCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PremisesSearchComponent,
    PremisesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

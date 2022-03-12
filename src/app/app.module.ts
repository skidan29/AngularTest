import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PremisesSearchComponent } from './premises-search/premises-search.component';
import { PremisesCardComponent } from './premises-card/premises-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: PremisesSearchComponent },
  { path: 'card/:id', component: PremisesCardComponent },
];

@NgModule({
  declarations: [AppComponent, PremisesSearchComponent, PremisesCardComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

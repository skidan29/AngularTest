import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremisesSearchComponent } from './premises-search/premises-search.component';
import { PremisesCardComponent } from './premises-card/premises-card.component';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


// маршруты лучше выделять в отдельный модуль
// например, в app-routing.module.ts
const appRoutes: Routes = [
    { path: '', component: PremisesSearchComponent },
    { path: 'card', component: PremisesCardComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        PremisesSearchComponent,
        PremisesCardComponent,
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule, // Зачем импортировать этот модуль, если снизу роутинг уже подключил свой?
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

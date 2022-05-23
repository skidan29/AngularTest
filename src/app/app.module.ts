import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers } from './reducers';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot(reducers, {
      metaReducers
    }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

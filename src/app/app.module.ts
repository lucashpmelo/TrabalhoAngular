import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Isso é import do Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Exemplo de import do Material Button
import {MatButtonModule} from '@angular/material/button';

//Isso é import do Google Maps
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APIKey } from '../config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: APIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
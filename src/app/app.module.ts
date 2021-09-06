import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContDirectivComponent } from './cont-directiv/cont-directiv.component';
import { ObserComponent } from './obser/obser.component';
import { GenericsComponent } from './generics/generics.component';
import { SubgComponent } from './subg/subg.component';

@NgModule({
  declarations: [
    AppComponent,
    ContDirectivComponent,
    ObserComponent,
    GenericsComponent,
    SubgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

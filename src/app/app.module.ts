import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MouseCoordinate } from './3ml.comp.mouse-coordinate';
import { EurToDollarConverter } from './3ml.comp.eur-to-dollar-converter';
import { EurToDollarConverter2 } from './3ml.comp.eur-to-dollar2';
import { EurToDollarConverter3 } from './3ml.comp.eur-to-dollar3';
import { SimpleCounter } from './3ml.comp.counter';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, 
  MouseCoordinate, 
  EurToDollarConverter, EurToDollarConverter2, EurToDollarConverter3, SimpleCounter],
  bootstrap:    [ EurToDollarConverter3 ]
})
export class AppModule { }
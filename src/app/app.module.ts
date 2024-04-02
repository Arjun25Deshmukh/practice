import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchollModule } from './scholl/scholl.module';
import { JavabykunalModule } from './javabykunal/javabykunal.module';
import { KkwaghModule } from './kkwagh/kkwagh.module';
import { PuneareasModule } from './puneareas/puneareas.module';
import { UpscModule } from './upsc/upsc.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    SchollModule,
    JavabykunalModule,
    KkwaghModule,
    PuneareasModule,
    UpscModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

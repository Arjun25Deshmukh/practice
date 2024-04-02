import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KarvenagarComponent } from './karvenagar/karvenagar.component';



@NgModule({
  declarations: [
    KarvenagarComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    KarvenagarComponent
  ]
})
export class PuneareasModule { }

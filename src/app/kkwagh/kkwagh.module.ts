import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralsecretaryComponent } from './generalsecretary/generalsecretary.component';
import { LadiesRepresentiveComponent } from './ladies-representive/ladies-representive.component';



@NgModule({
  declarations: [
    GeneralsecretaryComponent,
    LadiesRepresentiveComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    GeneralsecretaryComponent
  ]
})
export class KkwaghModule { }

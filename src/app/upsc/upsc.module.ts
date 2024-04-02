import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrelimsComponent } from './prelims/prelims.component';



@NgModule({
  declarations: [
    PrelimsComponent
  ],
  imports: [
    CommonModule
  ],
  exports
  :[
    PrelimsComponent
  ]
})
export class UpscModule { }

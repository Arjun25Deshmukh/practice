import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hall1Component } from './hall1/hall1.component';
import { Hall2Component } from './hall2/hall2.component';
import { CmdhallComponent } from './cmdhall/cmdhall.component';
import { YashashviComponent } from './yashashvi/yashashvi.component';
import { GymComponent } from './gym/gym.component';
import { MinakshiComponent } from './minakshi/minakshi.component';



@NgModule({
  declarations: [
    Hall1Component,
    Hall2Component,
    CmdhallComponent,
    YashashviComponent,
    GymComponent,
    MinakshiComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    Hall1Component,
    Hall2Component,
    CmdhallComponent,
    YashashviComponent,
    GymComponent,
    MinakshiComponent
  ]
})
export class JavabykunalModule {

 }

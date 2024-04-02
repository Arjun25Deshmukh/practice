import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AdminComponent } from './admin/admin.component';
import { PeonComponent } from './peon/peon.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavsaComponent } from './navsa/navsa.component';
import { BoardingcommitteeComponent } from './boardingcommittee/boardingcommittee.component';



@NgModule({
  declarations: [
    StudentsComponent,
    TeachersComponent,
    AdminComponent,
    PeonComponent,
    PrincipalComponent,
    NavsaComponent,
    BoardingcommitteeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsComponent,
    TeachersComponent,
    AdminComponent,
    PeonComponent,
    PrincipalComponent,
    NavsaComponent,
    BoardingcommitteeComponent
  ]
})
export class SchollModule { }

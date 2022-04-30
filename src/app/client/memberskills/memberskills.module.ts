import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberskillsRoutingModule } from './memberskills-routing.module';
import { MemberskillsComponent } from './memberskills.component';


@NgModule({
  declarations: [
    MemberskillsComponent
  ],
  imports: [
    CommonModule,
    MemberskillsRoutingModule
  ]
})
export class MemberskillsModule { }

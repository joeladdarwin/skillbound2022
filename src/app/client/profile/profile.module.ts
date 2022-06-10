import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';




@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule
  ]
})
export class ProfileModule {

 }

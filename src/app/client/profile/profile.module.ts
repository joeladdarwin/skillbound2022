import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SimpleNotificationsModule } from 'angular2-notifications';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillEditComponent } from './skill-card/skill-edit/skill-edit.component';
import { SkillAddComponent } from './skill-card/skill-add/skill-add.component';
import { WantSkillCardComponent } from './want-skill-card/want-skill-card.component';
import { SuggestionSkillPopupComponent } from './suggestion-skill-popup/suggestion-skill-popup.component';
import { WantSkillEditComponent } from './want-skill-card/want-skill-edit/want-skill-edit.component';
// import { TriangleAnimateComponent } from './skillCard/triangle-animate/triangle-animate.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SkillCardComponent,
    SkillEditComponent,
    SkillAddComponent,
    WantSkillCardComponent,
    SuggestionSkillPopupComponent,
    WantSkillEditComponent,
    // TriangleAnimateComponent
  ],
  imports: [
    // SimpleNotificationsModule.forRoot({
    //   icons: {
    //     success: '<i class="icon-check-sign icon-3x left"></i>',
    //     alert: '<i class="icon-exclamation icon-3x left"></i>',
    //     error: '<i class="icon-bug icon-3x left"></i>',
    //     info: '<i class="icon-info icon-3x left"></i>',
    //     warn: '<i class="icon-warning-sign icon-3x left"></i>',
    //   },
    //   rtl: true,
    // }),
    CommonModule,
    ProfileRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProfileModule {}

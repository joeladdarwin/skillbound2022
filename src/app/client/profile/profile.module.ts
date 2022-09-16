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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MAT_DATE_FORMATS,  DateAdapter,  MAT_DATE_LOCALE } from '@angular/material/core';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';



// import { SimpleNotificationsModule } from 'angular2-notifications';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';



import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillEditComponent } from './skill-card/skill-edit/skill-edit.component';
import { SkillAddComponent } from './skill-card/skill-add/skill-add.component';
import { WantSkillCardComponent } from './want-skill-card/want-skill-card.component';
import { SuggestionSkillPopupComponent } from './suggestion-skill-popup/suggestion-skill-popup.component';
import { WantSkillEditComponent } from './want-skill-card/want-skill-edit/want-skill-edit.component';
import { WantSkillAddComponent } from './want-skill-card/want-skill-add/want-skill-add.component';
import { SkillsSaleComponent } from './skills-sale/skills-sale.component';
import { AddSaleSkillsComponent } from './skills-sale/add-sale-skills/add-sale-skills.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailEditComponent } from './user-details/user-detail-edit/user-detail-edit.component';
// import { TriangleAnimateComponent } from './skillCard/triangle-animate/triangle-animate.component';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
@NgModule({
  declarations: [
    ProfileComponent,
    SkillCardComponent,
    SkillEditComponent,
    SkillAddComponent,
    WantSkillCardComponent,
    SuggestionSkillPopupComponent,
    WantSkillEditComponent,
    WantSkillAddComponent,
    SkillsSaleComponent,
    AddSaleSkillsComponent,
    UserDetailsComponent,
    UserDetailEditComponent,
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
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
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
    MatInputModule,
    MatRadioModule,
    MatAutocompleteModule
  ],
  providers: [   ],
})
export class ProfileModule {
  
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { FaqComponent } from './shared/faq/faq.component';
import { TermsComponent } from './shared/terms/terms.component';
import { ClassifiedsComponent } from './shared/classifieds/classifieds.component';
import { PressreleasesComponent } from './shared/pressreleases/pressreleases.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from './shared/profiles/profiles.component';
import { UsersService } from './service/users.service';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { CreateComponent } from './profile-detail/create/create.component';
import { EditComponent } from './profile-detail/edit/edit.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { GuidelinesComponent } from './shared/guidelines/guidelines.component';
import { NotificationComponent } from './profile-detail/notification/notification.component';
// import { SkillCardComponent } from './profile/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    PagenotfoundComponent,
    FaqComponent,
    TermsComponent,
    ClassifiedsComponent,
    PressreleasesComponent,
    FooterComponent,
    HeaderComponent,
    ProfilesComponent,
    AboutusComponent,
    CreateComponent,
    EditComponent,
    PrivacyComponent,
    GuidelinesComponent,
    NotificationComponent,
  

    // SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

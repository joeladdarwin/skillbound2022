import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';



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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilesComponent } from './profile-detail/profiles/profiles.component';
import { UsersService } from './service/users.service';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

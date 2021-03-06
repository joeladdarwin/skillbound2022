import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

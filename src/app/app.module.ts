import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutComponent } from './components/common/about/about.component';
import { LoginComponent } from './components/pages/Login/login.component';
import { RegisterComponent } from './components/pages/Register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeOneComponent,
    AppDownloadComponent,
    FaqComponent,
    OverviewComponent,
    FeaturesComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

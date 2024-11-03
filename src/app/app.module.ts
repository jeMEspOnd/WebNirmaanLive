import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WebnirmaanLandingpageComponent } from './webnirmaan-landingpage/webnirmaan-landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomsnakebarComponent } from './customsnakebar/customsnakebar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WebnirmaanLandingpageComponent,
    HomePageComponent,
    AboutPageComponent,
    FooterComponent,
    ContactUsComponent,
    CustomsnakebarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,  // Correctly placed here
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'about-page', component: AboutPageComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

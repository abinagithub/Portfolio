import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { PrivousWorkComponent } from './privous-work/privous-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MobileAboutComponent } from './mobile-about/mobile-about.component';
import { MobilePrivousComponent } from './mobile-privous/mobile-privous.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileHeaderComponent,
    PrivousWorkComponent,
    AboutMeComponent,
    HeaderComponent,
    MobileAboutComponent,
    MobilePrivousComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'privous', component : PrivousWorkComponent},
      { path : 'about', component : AboutMeComponent},
      { path : 'mob_about', component : MobileAboutComponent},
      { path : 'mob_privous', component : MobilePrivousComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

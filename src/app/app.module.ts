import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileHeaderComponent } from './mobile-view/mobile-header/mobile-header.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { PrivousWorkComponent } from './privous-work/privous-work.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileHeaderComponent,
    MobileViewComponent,
    PrivousWorkComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'privous', component : PrivousWorkComponent},
      { path : 'home', component : HomeComponent},
      { path : 'about', component : AboutMeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

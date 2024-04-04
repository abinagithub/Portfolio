import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css',
})
export class MobileHeaderComponent {
   home_icon : string = './assets/Img/home-icon.png'
   work_icon : string = './assets/Img/work-icon.png'
   profile_icon : string = './assets/Img/profile.png'

  homeTabIndex: number = 0;
  projectTabIndex: number = -1;
  aboutTabIndex: number = -1;

  constructor() { }

  toggleTabIndex(link: string) {
    switch(link) {
      case 'home':
        this.homeTabIndex = 0;
        this.projectTabIndex = -1;
        this.aboutTabIndex = -1;
        break;
      case 'privous':
        this.homeTabIndex = -1;
        this.projectTabIndex = 0;
        this.aboutTabIndex = -1;
        break;
      case 'about':
        this.homeTabIndex = -1;
        this.projectTabIndex = -1;
        this.aboutTabIndex = 0;
        break;
      default:
        break;
    }
  }
}

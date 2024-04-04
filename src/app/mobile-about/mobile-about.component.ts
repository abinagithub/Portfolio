import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-about',
  templateUrl: './mobile-about.component.html',
  styleUrl: './mobile-about.component.css'
})
export class MobileAboutComponent {
  instaImage : string = './assets/Img/Insta-removebg-preview.png'
  linkdnImage : string = './assets/Img/linkdin 1.png'
  githubImage : string = './assets/Img/github.png'
  telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
  email : string = './assets/Img/email.png'
  upwork : string = './assets/Img/upwork.png'
}

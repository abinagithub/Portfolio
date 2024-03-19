import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  githubImage : string = './assets/Img/github.png'
  telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
  linkdnImage : string = './assets/Img/linkdin 1.png'
  instaImage : string = './assets/Img/Insta-removebg-preview.png'
  upwork : string = './assets/Img/upwork.png'
  email : string = './assets/Img/email.png'
}

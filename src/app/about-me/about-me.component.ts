import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  animations: [
    trigger('slide', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-20px)' }), // Fade animation starts from left
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // Fade animation ends at center
      ]),
      transition('* => void', [
        animate('2000ms ease-in', style({ opacity: 0, transform: 'translateX(-20px)' })) // Fade out animation starts from center and ends at left
      ])
    ])
  ]
})
export class AboutMeComponent {
  githubImage : string = './assets/Img/github.png'
  telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
  linkdnImage : string = './assets/Img/linkdin 1.png'
  instaImage : string = './assets/Img/Insta-removebg-preview.png'
  upwork : string = './assets/Img/upwork.png'
  email : string = './assets/Img/email.png'
  abenezer : string = './assets/Img/about.png'
}

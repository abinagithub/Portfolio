import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-privous-work',
  templateUrl: './privous-work.component.html',
  styleUrl: './privous-work.component.css',
})
export class PrivousWorkComponent {
  githubImage : string = './assets/Img/github.png'
  telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
  linkdnImage : string = './assets/Img/linkdin 1.png'
  instaImage : string = './assets/Img/Insta-removebg-preview.png'
  upwork : string = './assets/Img/upwork.png'
  email : string = './assets/Img/email.png'
  mobile : string = './assets/video/Mobile-design.mp4'
  img1 : string = './assets/Img/img-1.png'
  img2 : string = './assets/Img/img-2.png'
  img3 : string = './assets/Img/img-3.png'
  img4 : string = './assets/Img/img4.png'
  project : string = './assets/video/project.mp4'
  figma : string = './assets/video/figma.mp4'
  home_video : string = './assets/video/Figma_design.mp4'

  
}

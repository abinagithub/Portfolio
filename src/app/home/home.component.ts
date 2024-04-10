import { Component,HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slide_down', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }), // Initial state before animation
        animate('2000ms', style({ opacity: 1, transform: 'translateY(0)' })) // Slide animation
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0, transform: 'translateY(-20px)' })) // Slide animation
      ])
    ]),
    trigger('slide_up', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }), // Fade animation starts from bottom
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })) // Fade animation ends at top
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0, transform: 'translateY(40px)' })) // Fade animation starts from bottom
      ])
    ])
  ]

  
})

export class HomeComponent {
     video : string = './assets/video/Figma_design.mp4' 
     home_video : string = './assets/video/Figma_design.mp4'
     ByeImage : string = './assets/Img/bye.jpg'
     instaImage : string = './assets/Img/Insta-removebg-preview.png'
     linkdnImage : string = './assets/Img/linkdin 1.png'
     githubImage : string = './assets/Img/github.png'
     telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
     telegram : string = './assets/Img/telegram_icon-removebg-preview.png'
     figmaPath : string = './assets/Img/Figma_logo.png'
     angularPath : string = './assets/Img/Angular_logo.png'
     reactPath : string = './assets/Img/React.png'
     nodePath : string = './assets/Img/node.png'
     expressPath : string = './assets/Img/Express_logo.png'
     skillPath : string = './assets/Img/Skill.png'
     illustration : string = './assets/Img/illustration.png'
     stand : string = './assets/Img/Stand.png'
     abraham : string = './assets/Img/Abraham.png'
     star : string = './assets/Img/Star.png'
     zan : string = './assets/Img/zan.png'
     Footer : string = './assets/Img/Footer.png'
     upwork : string = './assets/Img/upwork.png'
     email : string = './assets/Img/email.png'
     github_new : string = './assets/Img/github-new.jpg'
     bereket : string = './assets/Img/Bereket-pic 1.png'
     abenezer : string = './assets/Img/Frame 6.png'
     colun : string = './assets/colun.png'
     abenezer_pic : string = './assets/Img/Frame 7 (2).png'
     mobile : string = './assets/video/Mobile-design.mp4'
   
     isMobile: boolean = false; // Initialize isMobile to false

     constructor() {
       // Check initially when the component is loaded
       this.checkScreenSize();
     }
   
     @HostListener('window:resize')
     onResize() {
       // Call the checkScreenSize function whenever the window is resized
       this.checkScreenSize();
     }
   
     private checkScreenSize() {
       // Determine if the screen size is mobile or desktop
       this.isMobile = window.innerWidth <= 768;
     }

     
}

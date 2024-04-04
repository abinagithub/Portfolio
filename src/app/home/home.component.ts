import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
     video : string = './assets/video/Figma_design.mp4' 
     ByeImage : string = './assets/Img/bye.jpg'
     instaImage : string = './assets/Img/Insta-removebg-preview.png'
     linkdnImage : string = './assets/Img/linkdin 1.png'
     githubImage : string = './assets/Img/github.png'
     telegramImage : string = './assets/Img/telegram_icon-removebg-preview.png'
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

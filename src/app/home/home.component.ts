import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
     ByeImage : string = './assets/bye.jpg'
     instaImage : string = './assets/Insta-removebg-preview.png'
     linkdnImage : string = './assets/linkdin 1.png'
     githubImage : string = './assets/github.jpg'
     telegramImage : string = './assets/telegram_icon-removebg-preview.png'
     videoPath : string = './assets/Figma_design.mp4' 
     figmaPath : string = './assets/Figma_logo.png'
     angularPath : string = './assets/Angular_logo.png'
     reactPath : string = './assets/React.png'
     nodePath : string = './assets/node.png'
     expressPath : string = './assets/Express_logo.png'
     skillPath : string = './assets/Skill.png'
}

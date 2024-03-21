import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

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

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
  isDesktopView: boolean = window.innerWidth > 768; // Adjust breakpoint as needed

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktopView = event.target.innerWidth > 768; // Adjust breakpoint as needed
  }
}

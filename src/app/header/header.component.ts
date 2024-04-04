import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  scrollToSubscribeSection() {
    const subscribeSection = document.getElementById('subscribeSection');
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

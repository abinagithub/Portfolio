import { Component, ElementRef, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0 }))
      ])
    ])
  ]
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

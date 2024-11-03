import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('0.5s ease-in')]),
      transition('visible => hidden', [animate('0.5s ease-out')]),
    ]),
  ]
})
export class HomePageComponent implements OnInit, OnDestroy {
  phrases: string[] = [
    "CREATE IMPACT",
    "INNOVATE",
    "TRANSFORM",
    "ELEVATE",
    "INSPIRE",
    "IGNITE"
  ];

  index: number = 0;
  intervalId: any;
  animationState = 'visible';

  constructor() {}

  ngOnInit(): void {
    this.changePhraseWithAnimation(); // Initialize first phrase with animation
    this.intervalId = setInterval(() => this.changePhraseWithAnimation(), 3000); // Change text every 3 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  changePhraseWithAnimation(): void {
    // Start fade-out
    this.animationState = 'hidden';
    setTimeout(() => {
      // Change the text after fade-out
      this.index = (this.index + 1) % this.phrases.length;
      this.animationState = 'visible'; // Fade-in with new text
    }, 500); // Match fade-out duration
  }
}

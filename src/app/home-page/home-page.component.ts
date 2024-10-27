import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
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

  constructor() { }

  ngOnInit(): void {
    this.changeText(); // Initial call to set the first phrase
    this.intervalId = setInterval(() => this.changeText(), 2000); // Change text every 3 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval on component destruction
    }
  }

  changeText(): void {
    const textElement = document.getElementById('changing-text');
    if (textElement) {
      textElement.textContent = this.phrases[this.index];
      textElement.classList.remove('fade'); // Reset fade effect
      void textElement.offsetWidth; // Trigger reflow for restart animation
      textElement.classList.add('fade');

      // Move to the next phrase or loop back to the start
      this.index = (this.index + 1) % this.phrases.length;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webnirmaan-landingpage',
  templateUrl: './webnirmaan-landingpage.component.html',
  styleUrls: ['./webnirmaan-landingpage.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class WebnirmaanLandingpageComponent {
  constructor(private router: Router) { }

  isActive(link: string): boolean {
    const currentUrl = this.router.url;
    // Make sure only the specific link is active, not partial matches
    return currentUrl === link;
  }
}

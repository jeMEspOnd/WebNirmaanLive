import { Component, Input, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customsnakebar',
  templateUrl: './customsnakebar.component.html',
  styleUrls: ['./customsnakebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomsnakebarComponent implements OnInit {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | null = null;

  ngOnInit() {
    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      this.message = ''; // Clear message after 3 seconds
    }, 4000);
  }
}

import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' | null = null;
  notificationVisible: boolean = false; // Control the visibility of the notification
  // QueryList to get references to form fields
  @ViewChildren('formField') formFields!: QueryList<ElementRef>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Reset the notification before handling the submission
    this.notificationVisible = false;
    if (this.contactForm.valid) {
      this.notificationMessage = "Message sent successfully!";
      this.notificationType = 'success';
      this.contactForm.reset();
    } else {
      this.notificationMessage = "Please fill out all fields correctly.";
      this.notificationType = 'error';
      this.focusOnFirstInvalidField(); // Focus on the first invalid field
    
    }

    this.notificationVisible = true; // Show the notification

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      this.notificationVisible = false; // Hide the notification
    }, 3000);
  }
  // Method to focus on the first invalid field
  private focusOnFirstInvalidField(): void {
    const firstInvalidField = this.formFields.find(field => field.nativeElement.classList.contains('ng-invalid'));
    if (firstInvalidField) {
      firstInvalidField.nativeElement.focus();
    }
  }
}

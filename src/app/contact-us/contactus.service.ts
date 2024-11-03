import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private apiUrl = 'https://your-api-endpoint.com/contact';
  constructor(private http: HttpClient) {}
  sendContactForm(data: any): Observable<any> {
    // return this.http.post<any>(this.apiUrl, data);
    const successResponse = {
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: data // You can return the data if needed
    };

    return of(successResponse);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8089/api/registration';

  constructor(private http: HttpClient) {}

  getAllRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +  '/all');
  }
  deleteRegistration(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private apiUrl = 'http://localhost:8089/api/subscription';

  constructor(private http: HttpClient) {}

  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +  '/all');
  }

  deleteSubscription(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}

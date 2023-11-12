import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkierService {

  private apiUrl = 'http://localhost:8089/api/skier';

  constructor(private http: HttpClient) {}

  getAllSkiers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +  '/all');
  }
  deleteSkier(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}

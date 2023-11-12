import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private apiUrl = 'http://localhost:8089/api/instructor';

  constructor(private http: HttpClient) {}

  getAllInstructors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +  '/all');
  }
  deleteInstructors(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PisteService {

  private apiUrl = 'http://localhost:8089/api/piste';

  constructor(private http: HttpClient) {}

  getAllPistes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  deletePiste(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}

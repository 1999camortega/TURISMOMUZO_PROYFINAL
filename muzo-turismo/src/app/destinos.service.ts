import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  private apiUrl = 'http://localhost:3000/api/destinos'; // Ajusta esta URL al backend real

  constructor(private http: HttpClient) { }

  
  getDestinos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
  createDestino(destino: any): Observable<any> {
    return this.http.post(this.apiUrl, destino);
  }

 
  getDestinoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

 
  updateDestino(id: string, destino: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, destino);
  }

  
  deleteDestino(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

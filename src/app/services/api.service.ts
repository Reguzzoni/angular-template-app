import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Esempio di API pubblica

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    console.log('Chiamata API:', this.apiUrl);
    return this.http.get(this.apiUrl);
  }
}

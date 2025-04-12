import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Importa Observable

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) {}

  loadJson(path:string): Observable<any> {
    return this.http.get<any>(path);
  }
}
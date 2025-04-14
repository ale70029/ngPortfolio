import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
public lang = "it";
constructor(private http: HttpClient) {}

  loadJson(path:string) {
    return this.http.get(path);
  }
}
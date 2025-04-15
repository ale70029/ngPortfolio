import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable,switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public language = new BehaviorSubject<string>('it');
  constructor(private http: HttpClient) { }

  changeLanguage(lang: string) {
    this.language.next(lang);
  }


  loadJSON(path: string):Observable<any[]> {
    return this.language.pipe(
      switchMap((lang) => {
        const fullPath = `data/${lang}/${path}.json`;
        return this.http.get<any[]>(fullPath);
      })
    );
  }

}
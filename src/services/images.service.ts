import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private basePath = '../../public/assets/';

  constructor() { }

  getImagePath(path: string): string {
    return this.basePath + path;
  }
}

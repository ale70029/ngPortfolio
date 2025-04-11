import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  profilePic!:string;

  constructor(private imagesService: ImagesService){
    this.profilePic = imagesService.getImagePath("hero-about/heroImage.png")
  }

  

}

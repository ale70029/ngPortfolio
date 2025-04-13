import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    NgIf,
    RouterLink,
    MatButtonModule,
    AboutComponent
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  showMore=false;
  name = `ALESSANDRO\nCICCARONE`;
  constructor(){}

  showMoreToggle(){
    this.showMore = !this.showMore;
  }
}

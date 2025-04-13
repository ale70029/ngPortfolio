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
  curriculumLink = "https://github.com/ale70029/ngPortfolio/raw/bd5a3099c48e08d14810d49abf7dd660e3c697fb/public/data/CV%20Alessandro%20Ciccarone.pdf";

  constructor(){}

  showMoreToggle(){
    this.showMore = !this.showMore;
  }
}

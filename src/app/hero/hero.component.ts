import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
    MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  isLoading=true;
  name = `ALESSANDRO\nCICCARONE`;
  curriculumLink = "https://github.com/ale70029/ngPortfolio/raw/bd5a3099c48e08d14810d49abf7dd660e3c697fb/public/data/CV%20Alessandro%20Ciccarone.pdf";
  

  constructor(){}
}

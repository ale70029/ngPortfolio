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

  constructor(){}
}

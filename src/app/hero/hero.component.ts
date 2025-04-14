import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from "../about/about.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    NgIf,
    MatButtonModule,
    AboutComponent
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  showMore=false;
  name = `ALESSANDRO CICCARONE`;
  constructor(){}

  showMoreToggle(){
    this.showMore = !this.showMore;
  }
}

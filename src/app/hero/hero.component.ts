import { NgIf } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  isLoading=true;
  name = `ALESSANDRO\nCICCARONE`;

  constructor(){}
}

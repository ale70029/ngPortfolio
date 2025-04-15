import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from "./about/about.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [
    NgIf,AsyncPipe,
    MatButtonModule,
    AboutComponent
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  showMore=false;
  name = `ALESSANDRO CICCARONE`;
  text$!:Observable<any[]>
  constructor(private dataService:DataService){}
  ngOnInit(): void {
   this.text$=this.dataService.loadJSON("misc");
  }

  showMoreToggle(){
    this.showMore = !this.showMore;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor, AsyncPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{

  constructor(private dataService:DataService){}

  skillsData$:any

  ngOnInit(): void {
   this.skillsData$ = this.dataService.loadJson(`data/${this.dataService.lang}/skills.json`)
  }


}

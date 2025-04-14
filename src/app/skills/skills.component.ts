import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-skills',
  imports: [NgFor, AsyncPipe,
    MatIconModule,MatTabsModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{

  constructor(private dataService:DataService){}

  skillsData$:any
  backendSkills$:any
  frontendSkills$:any
  dataSkills$:any
  ideSkills$:any
  osSkills$:any

  ngOnInit(): void {
   this.skillsData$ = this.dataService.loadJson(`data/${this.dataService.lang}/skills.json`);
   this.backendSkills$ = this.skillsData$.pipe(
    map((skills: any[]) => skills.filter(skill => skill.area === 'Backend'))
  );
  this.frontendSkills$ = this.skillsData$.pipe(
    map((skills: any[]) => skills.filter(skill => skill.area === 'Frontend'))
  );

  this.dataSkills$ = this.skillsData$.pipe(
    map((skills: any[]) => skills.filter(skill => skill.area === 'Data'))
  );

  this.ideSkills$ = this.skillsData$.pipe(
    map((skills: any[]) => skills.filter(skill => skill.area === 'IDE'))
  );

  this.osSkills$ = this.skillsData$.pipe(
    map((skills: any[]) => skills.filter(skill => skill.area === 'OS'))
  );
  }


}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-skills',
  imports: [NgFor,NgIf, AsyncPipe,
    MatIconModule,MatTabsModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{

  constructor(private dataService:DataService){}

  text$!:Observable<any[]>
  //SKILLS LOADING
  skillsData$:any
  backendSkills$:any
  frontendSkills$:any
  dataSkills$:any
  ideSkills$:any
  osSkills$:any

  assignTabs(){
    this.skillsData$ = this.dataService.loadJSON("skills");
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

  //--

  ngOnInit(): void {
    this.assignTabs();
    this.text$=this.dataService.loadJSON("misc");
  }


}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  imports: [
    NgFor,NgIf,AsyncPipe,KeyValuePipe,
    MatCardModule, MatButtonModule,MatChipsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit{
  constructor(private dataService:DataService){}

  projects$:any
  selectedProject: any = null;

  showDetails(experience: any) {
    this.selectedProject = experience;
  }

  closeDetails() {
    this.selectedProject = null;
  }

  ngOnInit(): void {
    this.projects$ =this.dataService.loadJson(`data/${this.dataService.lang}/projects.json`);
  }



}

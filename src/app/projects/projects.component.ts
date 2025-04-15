import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { Observable } from 'rxjs';

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
  projects$!: Observable<any[]>;
  selectedProject: any = null;

  showDetails(project: any) {this.selectedProject = project;}

  closeDetails() {this.selectedProject = null;}

  ngOnInit(): void {
    this.projects$ = this.dataService.loadJSON('projects');
  }

}

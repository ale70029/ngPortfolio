import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  imports: [NgFor,NgIf, AsyncPipe,
    MatCardModule, MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {

  constructor(private dataService: DataService) { }
  experiences$!: Observable<any[]>;
  selectedExperience: any = null;

  showDetails(experience: any) {
    this.selectedExperience = experience;
  }

  closeDetails() {
    this.selectedExperience = null;
  }

  ngOnInit(): void {
    this.experiences$ = this.dataService.loadJSON("experience");
  }
}

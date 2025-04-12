import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { AsyncPipe,NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor, AsyncPipe,
    MatCardModule, MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit{

constructor(private dataService:DataService){}
experiences$: any

  ngOnInit(): void {
    this.experiences$ = this.dataService.loadJson(`data/${this.dataService.lang}/experience.json`)
  }
}

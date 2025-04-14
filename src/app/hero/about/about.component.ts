import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { DataService } from '../../../services/data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-about',
  imports: [
    NgFor, AsyncPipe,
    MatCardModule,MatGridListModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService){}
  aboutData$ : any

  ngOnInit(): void {
    this.aboutData$ = this.dataService.loadJson(`data/${this.dataService.lang}/about.json`);
  }
}

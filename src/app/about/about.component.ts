import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-about',
  imports: [
    NgFor,
    MatCardModule,MatGridListModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService){}
  aboutData! : any

  ngOnInit(): void {
    this.aboutData = this.dataService.loadJson("data/about.json").subscribe({
      next: (data) => {
        this.aboutData = data;
        console.log(this.aboutData);  // Stampa i dati in console
      },
      error: (err) => {
        console.error('Errore durante il caricamento del JSON', err);
      }
    });
  }


}

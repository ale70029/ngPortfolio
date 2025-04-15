import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,AsyncPipe,
    RouterOutlet,RouterLink,RouterLinkActive,FormsModule,
    MatToolbarModule,MatButtonModule, MatIconModule,MatSidenavModule,MatListModule,
    MatFormFieldModule,MatSelectModule,MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  text$!:Observable<any[]>

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.text$= this.dataService.loadJSON("misc");
  }

  //TO HIDE SIDEBAR IN MOBILE IF SWTICHING FROM PORTAIT TO LANDSCAPE
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 768 && this.sidenav.opened) {
      this.sidenav.close();
    }
  }
  //--

  getLanguage(): string {
    return this.dataService.language.getValue();
  }

  changeLanguage(lang:string){
    this.dataService.changeLanguage(lang);
  }
}

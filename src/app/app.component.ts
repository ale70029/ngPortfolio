import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,RouterLink,RouterLinkActive,
    MatToolbarModule,MatButtonModule, MatIconModule,MatSidenavModule,MatListModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';


  @ViewChild('sidenav') sidenav!: MatSidenav;

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 768 && this.sidenav.opened) {
      this.sidenav.close();
    }
  }
}

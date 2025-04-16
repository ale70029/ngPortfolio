import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [NgFor,NgIf,AsyncPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
  constructor(private dataService:DataService){}

  contacts$!:Observable<any[]>
  credits$!:Observable<any[]>
  text$!:Observable<any[]>

  ngOnInit(): void {
    this.contacts$ = this.dataService.loadJSON("contacts");
    this.credits$ = this.dataService.loadJSON("credits");
    this.text$ = this.dataService.loadJSON("misc");
  }

}

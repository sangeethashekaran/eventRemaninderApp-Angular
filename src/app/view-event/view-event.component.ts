import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  results=""                   //event disply
  constructor(private data:DataService) {
    let uID=localStorage.getItem("currentUid")
    this.results=this.data.displayEvent(uID);
   }
   
  
  ngOnInit(): void {
  }

}

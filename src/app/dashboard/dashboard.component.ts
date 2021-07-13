import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    username:any;
  constructor(private data:DataService,private router:Router) {
    this.username=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }

  //navigating to addevent form
  addEvent(){
    this.router.navigateByUrl("addevent");
  }
  viewEvent(){
    this.router.navigateByUrl("viewevent");
  }


  
    

  


}

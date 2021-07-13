import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  userEvents=""                   //events
  constructor(private data:DataService,private router:Router) {
    let uid=localStorage.getItem("uid")
    this.data.displayEvent(uid)
    .subscribe((result:any)=>{
      if(result){
        this.userEvents=result.message
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
   }
   
  
  ngOnInit(): void {
  }
  homepage(){
   this.router.navigateByUrl("dashboard")
  }
  logout(){
    this.router.navigateByUrl("")
  }
}

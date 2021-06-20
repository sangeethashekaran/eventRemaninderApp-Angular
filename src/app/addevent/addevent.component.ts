import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  uID="";
  eDate="";
  eName="";
  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
  }

  //save events 
  addEvent(){
    let uID=this.uID;
    let eDate=this.eDate;
    let eName=this.eName;
    // console.log(uID,eDate,eName);
    const result=this.data.addEvent(uID,eDate,eName);
    if(result){
      alert("Your Event added successfully");
    }
    else{
      alert("failed to add Event")
    }
  
  }

  //back button function
back(){
this.router.navigateByUrl("dashboard")
}
}

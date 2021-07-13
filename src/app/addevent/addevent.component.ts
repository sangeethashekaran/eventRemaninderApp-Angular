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
    let uid=this.uID;
    let eDate=this.eDate;
    let eName=this.eName;
    // console.log(uID,eDate,eName);
    this.data.addEvent(uid,eDate,eName)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
  }
    // if(result){
    //   alert("Your Event added successfully");
    // }
    // else{
    //   alert("failed to add Event")
    // }
  
  

  //back button function
back(){
this.router.navigateByUrl("dashboard")
}
}

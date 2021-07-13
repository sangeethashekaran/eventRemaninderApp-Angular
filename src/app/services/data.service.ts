
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUid="";
  userDetails: any = {
    100: { id: 100, username: "sangeetha", password: "sangee", eventDetails: [] },
    101: { id: 101, username: "shwetha", password: "shwe", eventDetails: [] },
    102: { id: 102, username: "sherly", password: "sherly", eventDetails: [] }
  }
  options={
    withCredentials:true
  }

  constructor(private route: Router,private http:HttpClient) {
    
   }

  saveDetails(){
    localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
    if(this.currentUid){
    localStorage.setItem("currentUid",JSON.stringify(this.currentUid))
    }
  }

  getDetails(){
    if(localStorage.getItem("userDetails")) {
      this.userDetails=JSON.parse(localStorage.getItem("userDetails"));
      }
    if(localStorage.getItem("currentUid")){
      this.currentUid=JSON.parse(localStorage.getItem("currentUid"));
    }
  }

  //login 
  login(id: any, pswd: any) {
    console.log(id, pswd);

    const data={
      id,
      pswd
    }
    return this.http.post("http://localhost:5000/login",data,this.options)
  }

  //   let user = this.userDetails;
  //   if (id in user) {
  //     if (pswd == user[id]["password"]) {
        
  //       this.currentUid=user[id]["id"];       //stroring current user's ID
  //       console.log(this.currentUid)
  //       this.saveDetails();                     //calling saveDetails
  //       return true;
  //     }
  //     else {
  //       return false;
  //     }
  //   }
  //   else {
  //     return false;
  //   }
  // }

  //register 
  register(uname: any, id: any, pswd: any) {
    const data={
      uname,
      id,
      pswd
    }
    return this.http.post("http://localhost:5000/register",data)
  }
  //   let user = this.userDetails;
  //   if (id in user) {
  //     if (pswd == user[id]["password"])  //checking password
  //       return false;
  //     //  alert("User already exist..please login");         
  //   }
  //   else {
  //     user[id] = {
  //       id,
  //       username: uname,
  //       password: pswd,
  //       eventDetails:[]
  //     }
  //     // this.saveDetails()
  //     return true;
    
  //   }
  // }

  //add event function

   addEvent(uid:any,eDate: any, eName: any) {
    console.log(eDate,eName)
    const data={
      uid,
      eDate,
      eName
    }
    return this.http.post("http://localhost:5000/addevent",data,this.options)
  }

  //    let user = this.userDetails;
  //     console.log(uID);
  //    if(uID in user) { 
  //     // let user=this.userDetails;
  //     console.log(uID); 
  //     console.log(user);
               
  //     user[uID]["eventDetails"].push({
  //       eDate: eDate,
  //       eName: eName
  //     })
  //     // this.saveDetails();
  //     console.log(user[uID]["eventDetails"])
  //     return true;

  //   }
  //   else {
  //     return false;
  //   }
  //  }

// display event
  displayEvent(uid){
    const data={
      uid
    }
    return this.http.post("http://localhost:5000/viewevent",data,this.options)
    // let user=this.userDetails;
    // return user[uID]["eventDetails"]
    }
  
  
}


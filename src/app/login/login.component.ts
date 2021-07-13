import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    id:['',Validators.required],
    pswd:['',Validators.required]
  })
  constructor(private fb:FormBuilder,private data:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.loginForm.valid) {
     let id=this.loginForm.value.id;
     let pswd=this.loginForm.value.pswd;
     this.data.login(id,pswd)
     .subscribe((result:any)=>{
       if(result){
         alert(result.message);
         this.route.navigateByUrl("dashboard");
         localStorage.setItem("uid",id) //saving current id 
         localStorage.setItem("name",result.username)  //saving current username
       }
      },
      (result)=>{
        alert(result.error.message)
      }
     )
    }
  //    if(result){
  //      alert("Login successfull");
  //      this.route.navigateByUrl("dashboard");
  //    }
  //    else{
  //      alert("Invalid account")
  //    }

  // }

else{
alert("Invalid Form")
}
  }
}

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
     const result = this.data.login(id,pswd)
     if(result){
       alert("Login successfull");
       this.route.navigateByUrl("dashboard");
     }
     else{
       alert("Invalid account")
     }

  }

else{
alert("Invalid Form")
}
  }
}

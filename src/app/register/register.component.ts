import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    uname:['',Validators.required],
    id:['',Validators.required],
    pswd:['',Validators.required]
  })

  constructor(private fb:FormBuilder,private data:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
    let uname=this.registerForm.value.uname;
    let id=this.registerForm.value.id;
    let pswd=this.registerForm.value.pswd;
    const result=this.data.register(uname,id,pswd)
    if(result){
      alert("Successfully Registered");
      this.router.navigateByUrl("");
    }
    else{
      alert("User already exist..please login"); 
    }
    }
    else{
      alert("invalid form");
    }
  }

}

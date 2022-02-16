import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup; 
  errorMsg :String;
  isSucess :Boolean=true;

  constructor(private formBuilder:FormBuilder,private router: Router) {
   }
   
  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
    this.errorMsg='Username/Password mismatch';
    
  }

  createFormGroup() {
    return (this.loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    }));
    }


    login(){
      if(this.loginForm.valid){
        this.router.navigateByUrl('register')

      }else{
        this.isSucess=false;
      }
    }

}

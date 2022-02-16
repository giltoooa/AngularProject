import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm :FormGroup; 
  errorMsg:String;
  isFlag:Boolean=true;
  country = [
    {name: 'India', code: 'IND'},
    {name: 'United States', code: 'US'},
    {name: 'Germany', code: 'DE'}
    ];

    genders = [
      "Male",
      "Female"
      ];

  constructor(private formBuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.createFormGroup();
  }


  createFormGroup() {
    return (this.registerForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    repassword: ["", Validators.required],
    gender: ["", Validators.required],
    country: ["", Validators.required],
    fname: ["", Validators.required],
    lname: ["", Validators.required],
    }));
    }


    register(){

      console.log(this.registerForm.value);
      if(this.registerForm.valid){
        this.router.navigateByUrl('home');
      }
      else{
        
        this.isFlag=false;
        this.errorMsg="form validation error";
      }
    }

}

import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loginForm: FormGroup | any;
  public submitted = false;
  registerUserData: UserData = new UserData();
  modelText:string="";
  modelHeader:string="";
  showSpinner:boolean=false;
  constructor(private _auth: AuthService,private _router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
      this._router.navigate(["/login"]);
    }
  }


  DisplayModalPopup(modelHeader:string,modelText:string){
    this.modelHeader=modelHeader;
    this.modelText=modelText;
    document.getElementById("btnLaunchModel")?.click();
  }
  ShowSpinner(){
    this.showSpinner=true;
  }
  HideSpinner(){
    this.showSpinner=false;
  }
  registerUser() {
    if(this.registerUserData.userName==''|| this.registerUserData.password==''){
      this.DisplayModalPopup("Error","Please enter the username and password");
      return;
    }
    this.ShowSpinner();
    var userDataObject={
      userName:this.registerUserData.userName,
      password:this.registerUserData.password
    }
    this._auth.registerUser(this.registerUserData).subscribe(res => {
      this.HideSpinner();localStorage.setItem('token',res.token);
      this._router.navigate(['/login'])
    },
      err => console.log(err));
  }


}
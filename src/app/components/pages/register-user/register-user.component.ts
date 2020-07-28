import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';
import { SingupService } from '../../../service/singup/singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  empid;
  empname;
  enterPassword;
  enterRePassword;
  errorMessage;
  successMessage;
  invalidUser=false;

  constructor(private signupService: SingupService,private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  SignIn()
  {
    let resp = this.loginService.SignIn(this.empid,this.enterPassword);
    resp.subscribe(
      data=>{ 
        if(data==="User id is not available")
          {
            this.invalidUser=true;
            this.errorMessage=data;
          }
          else if(data==="User id and password mismatch")
          {
            this.invalidUser=true;
            this.errorMessage=data;
          }
          else{ let resp = data as string;
            sessionStorage.setItem('authenticaterUser',this.empid);
            sessionStorage.setItem('authenticaterUserName',resp);
            this.router.navigate(['dashboard']);
            this.invalidUser=false;
          }},
      error=>
        {
          this.invalidUser=true;
          this.errorMessage='Invalid Credentials';
        }
       )
  }

  SignUp()
  {
    let resp = this.signupService.SignUp(this.empid,this.empname,this.enterPassword);
    resp.subscribe(
      data=>{ if(data==="Account created")
          {
            this.successMessage='Account created succefully';
            this.invalidUser=false;

          }
          else if(data=="Account with Employee id aleady exist")
          {
          this.invalidUser=true;
          this.errorMessage="Account with Employee id aleady exist";
          }
          else{
            this.invalidUser=true;
            this.errorMessage='Account not created';
          }},
      error=>
        {
          this.invalidUser=true;
          this.errorMessage='Account not created';
        }
       )
  }
}

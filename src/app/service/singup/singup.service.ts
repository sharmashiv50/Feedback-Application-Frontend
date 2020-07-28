import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http:HttpClient) { }
  public SignUp(userid:string,username:string,password:string)
  {
    return this.http.post("http://localhost:8080/signUp",{emp_id:userid,name:username,password:password},{responseType:'text' as 'json'})
  }
}

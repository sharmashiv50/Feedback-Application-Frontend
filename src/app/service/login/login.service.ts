import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public SignIn(username:string,password:string)
  {
    return this.http.post("http://localhost:8080/login",{emp_id:username,password:password},{responseType:'text' as 'json'})
  }
}

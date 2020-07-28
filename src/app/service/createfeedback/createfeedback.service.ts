import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatefeedbackService {

  constructor(private http:HttpClient) { }

  public Create(newfeedback)
  {
    var empname =sessionStorage.getItem('authenticaterUserName');
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newfeedback);
    console.log(body);
    return this.http.post(`http://localhost:8080/users/${empname}/createFeedback`,body,{'headers':headers});
  }
}
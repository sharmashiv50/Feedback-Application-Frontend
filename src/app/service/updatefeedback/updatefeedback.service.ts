import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatefeedbackService {

  constructor(private http:HttpClient) { }

  public Update(id,newfeedback)
  {
    var empname =sessionStorage.getItem('authenticaterUserName');
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newfeedback);
    return this.http.put(`http://localhost:8080/users/${empname}/updateFeedback/${id}`,body,{'headers':headers});
  }
}

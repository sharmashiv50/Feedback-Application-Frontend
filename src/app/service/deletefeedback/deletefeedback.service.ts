import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletefeedbackService {

  constructor(private http:HttpClient) { }

  public Delete(id)
  {
    var empname =sessionStorage.getItem('authenticaterUserName');
    return this.http.delete(`http://localhost:8080/users/${empname}/feedback/${id}`);
  }
}

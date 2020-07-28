import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  retrieveDashboard(username)
  {
    return this.http.get<Element[]>(`http://localhost:8080/users/${username}/feedback`)
  }
}

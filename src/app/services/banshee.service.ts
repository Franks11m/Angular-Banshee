import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BansheeService {
 private apiURL = 'http://localhost:3000/banshee'
  constructor(private http: HttpClient) { }

  getBanshee() : Observable<any[]>{
    return this.http.get<any[]>(this.apiURL)
  }
}
 
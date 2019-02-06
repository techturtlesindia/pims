import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  apiUrl: string = "http://34.211.99.182/api/";
  constructor(public http: HttpClient) { 
    if(localStorage.getItem('currentUser') != undefined) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(atob(localStorage.getItem('currentUser'))));
      this.currentUser = this.currentUserSubject.asObservable();
    }else{
      this.currentUserSubject = new BehaviorSubject<User>(undefined);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User {
    if(this.currentUserSubject != undefined) {
      return this.currentUserSubject.value;
    }
  }

  public async authenticationLogin(data:any) {
    var headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })
    var url = this.apiUrl+"auth/signin";
    console.log(url);
    return await this.http.post(url,data,{
      headers:headers
    }).subscribe((user:User)=>{
      if (user && user.accessToken) {
        localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
        this.currentUserSubject.next(user);
      }
      return user;
    }, (error)=>{
      console.log(error);
      return null;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(undefined);
  } 
}

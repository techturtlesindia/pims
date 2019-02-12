import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { Menu } from '../models/Menu';
import { Lookup } from '../models/Lookup';
import { Users } from '../models/Users';
@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  getToken(): any {
    if (this.currentUserSubject != undefined && this.currentUserSubject.value != undefined) {
      return this.currentUserSubject.value.accessToken;
    }
  }
  apiUrl: string = "http://34.211.99.182/api/";
  constructor(public http: HttpClient) {
    if (localStorage.getItem('currentUser') != undefined) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(atob(localStorage.getItem('currentUser'))));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(undefined);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User {
    if (this.currentUserSubject != undefined) {
      return this.currentUserSubject.value;
    }
  }

  public signup(data:any){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "auth/signup";
    console.log(url);
    return this.http.post<any>(url, JSON.stringify(data), {
      headers: headers
    })
    .pipe(map(user => {
      console.log('user',user);
        if (user) {
          // localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
          // this.currentUserSubject.next(user);
        }

        return user;
    }));
  }
  public editUser(data:any){
    console.log('data',data);
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/user/update";
    console.log(url);
    return this.http.put<any>(url, JSON.stringify(data), {
      headers: headers
    })
    .pipe(map(user => {
      console.log('user',user);
        if (user) {
          // localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
          // this.currentUserSubject.next(user);
        }

        return user;
    }));
  }

  public getUser(pageno,size){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/user/call/"+pageno+"/"+size;
    console.log(url);
    return this.http.get<any>(url, {
      headers: headers
    })
    .pipe(map(user => {
      console.log('user',user);
        if (user) {
          // localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
          // this.currentUserSubject.next(user);
        }

        return user;
    }));

  }

  public authenticationLogin(data: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "auth/signin";
    console.log(url);
    /* return await this.http.post(url, data, {
      headers: headers
    }).subscribe((user: User) => {
      if (user && user.accessToken) {
        localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
        this.currentUserSubject.next(user);
      }
      return user;
    }, (error) => {
      console.log(error);
      return null;
    }); */
    return this.http.post<any>(url, JSON.stringify(data), {
      headers: headers
    })
    .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
          this.currentUserSubject.next(user);
        }

        return user;
    }));


  }

  public async loadNavItems() {
    // var url = this.apiUrl + "common/menu/list/" + this.currentUserValue.authorities[0].authority;
    // return await this.http.post(url, "");
    return await this.http.get("../assets/navItems.json");
    var url = this.apiUrl + "common/menu/list/" + this.currentUserValue.authorities[0].authority;
    return await this.http.post(url, "");
  }

  public async getManus(pageNo: any, size: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/menu/call/" + pageNo + "/" + size;
    return await this.http.get(url, {
      headers: headers
    })
  }

  public async saveManu(menu: Menu) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/menu/save/" + menu.rolename;
    return await this.http.post(url, menu, {
      headers: headers
    })
  }





  public async deleteManu(row: Menu) {
    var headers = new HttpHeaders({
    })
    var url = this.apiUrl + "common/menu/delete/" + row.id;
    return await this.http.delete(url, {
      headers: headers
    })
  }

  public async updateManu(menu: Menu) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/menu/update";
    return await this.http.put(url, menu, {
      headers: headers
    })
  }


  public async getLookup(pageNo: any, size: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "pmislookup/lookup" + pageNo + "/" + size;
    return await this.http.get(url, {
      headers: headers
    })
  }

  public async saveLookup(lookup: Lookup) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    lookup.parent_id= 1;
   

   var data =  JSON.stringify(lookup)
    console.log(data);
    var url = this.apiUrl + "pmislookup/lookup";
    return await this.http.post(url, lookup, {
      headers: headers
    })
  }

  public async deleteU(id) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/menu/delete/"+id;
    return await this.http.delete(url, {
      headers: headers
    })
  }

  public async deleteUser(row: Users) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    var url = this.apiUrl + "common/menu/delete";
    return await this.http.post(url, row, {
      headers: headers
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(undefined);
  }
}

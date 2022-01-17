import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from './helper.service';
import { LocalStorageService } from './local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginResponse } from '../models/LoginResponse.model';
import { UserLogin } from '../models/userlogin.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private helperService: HelperService,
    private message: MessageService,
    private localStoreServices: LocalStorageService,
    private activeRoute: ActivatedRoute,
    public router: Router) { }

  getUserLogin(): LoginResponse | null {
    let data: LoginResponse = this.localStoreServices.getUserLogin();
    if (data != null)
      return data;
    return null;
  }

  isInRole(role: string): boolean {
    let data: LoginResponse = this.localStoreServices.getUserLogin();
    if (data !== null && data.roles.find(x => x === role))
      return true;
    return false;
  }

  load() {
    let data: LoginResponse = this.localStoreServices.getUserLogin();
    if (this.router.url == "/home/main") {
      if (data != null && data.roles.find(x => x == 'admin')) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['anggota']);
      }
    }
  }

  login(model: UserLogin) {
    var time = this.message.busy();
    return new Promise((resolve, reject) => {
      this.http.post(this.helperService.apiUrl + "/api/login", model).subscribe((response: any) => {
        var result = response.data as LoginResponse;
        this.localStoreServices.setUserLogin(result);
        this.message.busyStop();
        resolve(result);
      }, (err) => {
        this.message.busyStop();
        reject(false);
      });
    })
  }

  logout() {
    this.localStoreServices.logOut();
    this.router.navigate(['']);
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      let profile = this.localStoreServices.getProfile();
      if (profile == null) {
        let data: LoginResponse = this.localStoreServices.getUserLogin();
        this.http.get(this.helperService.apiUrl + "/auth/profile", this.getHeader()).subscribe((response) => {
          this.localStoreServices.setProfile(response);
          resolve(response);
        }, (err) => {
          reject(err);
        });
      } else {
        resolve(profile);
      }
    });
  }

  getHeader() {

    var headers = { 'Content-Type': 'application/json', 'Authorization': '' };

    let data: LoginResponse = this.localStoreServices.getUserLogin();
    if (data != null)
      headers.Authorization = 'Bearer ' + data.token;

    return { headers };
  }

}

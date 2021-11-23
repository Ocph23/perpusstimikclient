import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private helperService: HelperService, private authService: AuthService, public httpClient: HttpClient) { }



  getHeader(){
    return this.authService.getHeader();
  }

  get(url: string) {
    return this.httpClient.get(`${this.helperService.apiUrl}/${url}`, this.authService.getHeader());
  }

  post(url: string, content: any) {
    return this.httpClient.post(`${this.helperService.apiUrl}/${url}`, content, this.authService.getHeader());
  }

  put(url: string, content: any) {
    return this.httpClient.put(`${this.helperService.apiUrl}/${url}`, content, this.authService.getHeader());
  }


  delete(url: string) {
    return this.httpClient.delete(`${this.helperService.apiUrl}/${url}`, this.authService.getHeader());
  }

}

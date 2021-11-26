import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setting } from '../models/buku.model';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  controller: string = "api/setting"
  constructor(private restService: RestService, private message: MessageService) { }


  dashboard(){
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get("api/dashboard").subscribe(response => {
        var result = response as any;
        resolve(result);
        this.message.busyStop();
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })

    });
  }

  get() {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller).subscribe(response => {
        var result = response as any;
        resolve(result.data as Setting[]);
        this.message.busyStop();
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })

    });
  }



  getById(id: number) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller + "/" + id).subscribe(response => {
        var result = response as any;
        resolve(result.data as Setting);
        this.message.busyStop();

      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

  

  getLast() {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller + "/last").subscribe(response => {
        var result = response as any;
        resolve(result.data as Setting);
        this.message.busyStop();

      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }




  post(model: Setting) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.post(this.controller, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Setting);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }





  update(model: Setting) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.put(this.controller + "/" + model.id, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Setting);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemKarya, Penelitian } from '../models/buku.model';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PenelitianService {

  controller: string = "api/penelitian"
  constructor(private restService: RestService, private message: MessageService) { }



  get() {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller).subscribe(response => {
        var result = response as any;
        resolve(result.data as Penelitian[]);
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
        resolve(result.data as Penelitian);
        this.message.busyStop();

      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }



  post(model: Penelitian) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.post(this.controller, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Penelitian);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }





  update(model: Penelitian) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.put(this.controller + "/" + model.id, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Penelitian);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

///1/tambahpenelitian/1
  createItems(id: any, count: number) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller + `/${id}/tambahpenelitian/${count}` ).subscribe(response => {
        var result = response as any;
        resolve(result.data as ItemKarya[]);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }




}

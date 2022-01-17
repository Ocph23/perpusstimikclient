import { Injectable } from '@angular/core';
import { Peminjaman } from '../models/buku.model';
import { MessageService } from './message.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PeminjamanService {


  controller: string = "api/peminjaman"
  constructor(private restService: RestService, private message: MessageService) { }

  get() {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller).subscribe(response => {
        var result = response as any;
        resolve(result.data as Peminjaman[]);
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
        resolve(result.data as Peminjaman);
        this.message.busyStop();

      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

  GetByKaryaItemId(searchText: string) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.get(this.controller + "/byKaryaItemId/" + searchText).subscribe(response => {
        var result = response as any;
        resolve(result.data as Peminjaman);
        this.message.busyStop();

      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

  post(model: Peminjaman) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.post(this.controller, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Peminjaman);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

  update(model: Peminjaman) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.put(this.controller + "/" + model.id, model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Peminjaman);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }

  createPeminjaman(model: Peminjaman) {
    this.message.busy();
    return new Promise((resolve, reject) => {
      this.restService.post(this.controller + "", model).subscribe(response => {
        var result = response as any;
        resolve(result.data as Peminjaman);
        this.message.busyStop();
        this.message.successMessage("Data Tersimpan !");
      }, err => {
        this.message.busyStop();
        this.message.errorMessage(err);
      })
    });
  }



}

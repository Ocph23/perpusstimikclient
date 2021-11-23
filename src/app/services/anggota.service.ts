import { Injectable } from '@angular/core';
import { Anggota } from '../models/buku.model';
import { MessageService } from './message.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  controller:string="api/anggota"
  constructor(private restService:RestService,  private message:MessageService) { }

  get(){
  this.message.busy();
 return new Promise((resolve, reject)=>{
    this.restService.get(this.controller).subscribe(response=>{
      var result = response as any;
      resolve(result.data as Anggota[]);
      this.message.busyStop();
    },err=>{
      this.message.busyStop();
      this.message.errorMessage(err);
    })

  });
}

}

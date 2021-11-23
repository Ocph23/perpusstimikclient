import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peminjaman } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PemesananService } from 'src/app/services/pemesanan.service';

@Component({
  selector: 'app-pemesanan-detail',
  templateUrl: './pemesanan-detail.component.html',
  styleUrls: ['./pemesanan-detail.component.scss']
})
export class PemesananDetailComponent implements OnInit {
  model: any;

  constructor(activedRouter: ActivatedRoute, 
    private pemesananService:PemesananService, 
    private message: MessageService,
    ) {
    var param1:any = activedRouter.snapshot.paramMap.get('id');
    pemesananService.getById(param1).then(response => {
      this.model = response;
    });
  }


  ngOnInit(): void {
  }

  createPeminjaman(){
    var peminjaman = {anggotaid:this.model.anggotaid, keterangan:"", status:"sukses", items:this.model.items} as Peminjaman;
    this.pemesananService.createPeminjaman(peminjaman).then(response=>{
      this.model.status='sukese';
      this.message.infoMessage("Peminjaman Berhasil Dibuat !")
    }, err=>{
      this.message.errorMessage(err.message);
    });
  }

}

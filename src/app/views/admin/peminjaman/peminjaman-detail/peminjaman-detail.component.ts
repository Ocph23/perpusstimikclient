import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { PeminjamanService } from 'src/app/services/peminjaman.service';

@Component({
  selector: 'app-peminjaman-detail',
  templateUrl: './peminjaman-detail.component.html',
  styleUrls: ['./peminjaman-detail.component.scss']
})
export class PeminjamanDetailComponent implements OnInit {

  model: any;

  constructor(activedRouter: ActivatedRoute, 
    private peminjamanService:PeminjamanService, 
    private message: MessageService,
    ) {
    var param1:any = activedRouter.snapshot.paramMap.get('id');
    peminjamanService.getById(param1).then(response => {
      this.model = response;
    });
  }


  ngOnInit(): void {
  }

  createPengembalian(){
    // var peminjaman = {anggotaid:this.model.anggotaid, keterangan:"", status:"sukses", items:this.model.items} as Peminjaman;
    // this.peminjamanService.createPeminjaman(peminjaman).then(response=>{
    //   this.model.status='sukese';
    //   this.message.infoMessage("Peminjaman Berhasil Dibuat !")
    // }, err=>{
    //   this.message.errorMessage(err.message);
    // });
  }

}

import { Component, OnInit } from '@angular/core';
import { Peminjaman } from 'src/app/models/buku.model';
import { PeminjamanService } from 'src/app/services/peminjaman.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.component.html',
  styleUrls: ['./laporan.component.scss']
})
export class LaporanComponent implements OnInit {

dari!:Date;
sampai!:Date;
datas:any[]=[];

  constructor(private peminjamanService:PeminjamanService) { }

  ngOnInit(): void {
  }


  cari(){
      if(!this.dari||!this.sampai)
        return;

      if(this.dari>=this.sampai)
        return;

      this.peminjamanService.get().then(response=>{
        var items= response as Peminjaman[];
        var no=1;
        items.filter(x=>x.created_at>=this.dari && x.created_at<=this.sampai).forEach(element => {
            element.items.forEach(el=>{
              var item= {No:no++, Kode:el.ItemKarya.parent.kode, 
                Judul:el.ItemKarya.parent.judul, Jenis:el.ItemKarya.jenis, 
               Anggota:element.anggota.nama, 
              Tanggal:element.created_at , status:el.statuskembali}
              this.datas.push(item);
            });

        });


      });

  }

  print(){
    window.print();
  }

}

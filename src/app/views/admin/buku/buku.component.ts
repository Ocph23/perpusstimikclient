import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/models/buku.model';
import { BukuService } from 'src/app/services/buku.service';
import { MessageService } from 'src/app/services/message.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.scss']
})
export class BukuComponent implements OnInit {
  datas:Buku[]=[];
  sources:Buku[]=[];
  constructor(private message:MessageService, bukuService:BukuService) {
      bukuService.get().then((result)=>{
        this.sources= result as Buku[];
        this.textChanged("");
      });
   }

  ngOnInit(): void {
  }


  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.judul.toLowerCase().includes(text)||
        x.kategori.toLowerCase().includes(text)||
        x.penulis.toLowerCase().includes(text)||
        x.penerbit.toLowerCase().includes(text)||
        x.kode.toLowerCase().includes(text)||
        x.tahun.toString().includes(text)||
        x.kota.toLowerCase().includes(text)
        );
      return;
    }

    this.datas= this.sources;


  }

}

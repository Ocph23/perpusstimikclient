import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Lokasi } from 'src/app/models/buku.model';
import { LokasiService } from 'src/app/services/lokasi.service';

@Component({
  selector: 'app-lokasi',
  templateUrl: './lokasi.component.html',
  styleUrls: ['./lokasi.component.scss']
})
export class LokasiComponent implements OnInit {
  
datas:Lokasi[]=[];
sources:Lokasi[]=[];

  constructor(private lokasiService:LokasiService) {
    lokasiService.get().then(response=>{
        this.sources= response as Lokasi[];
        this.textChanged("");
    })


   }

  ngOnInit(): void {
  }

  
  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.nama.toLowerCase().includes(text)||
        x.keterangan.toString().toLowerCase().includes(text)
        );
      return;
    }
    this.datas= this.sources;
  }

}

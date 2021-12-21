import { Component, OnInit } from '@angular/core';
import { Anggota } from 'src/app/models/buku.model';
import { AnggotaService } from 'src/app/services/anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.scss']
})
export class AnggotaComponent implements OnInit {
datas:Anggota[]=[];
  constructor(private anggotaService:AnggotaService) {
    anggotaService.get().then(response=>{
      this.datas= response as Anggota[];
    })
   }

  ngOnInit(): void {
  }



  updateStatus(anggota:Anggota){
    this.anggotaService.updateStatus(anggota).then(response=>{
        var result=response as Anggota;
        anggota.aktif=result.aktif;
    });
  }

  getColor(data:string){
    if(data==='ya')
      return "#8ec92c";
    return "#dc2626";

  }

}

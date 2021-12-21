import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Lokasi } from 'src/app/models/buku.model';
import { LokasiService } from 'src/app/services/lokasi.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-lokasi',
  templateUrl: './lokasi.component.html',
  styleUrls: ['./lokasi.component.scss']
})
export class LokasiComponent implements OnInit {
  
datas:Lokasi[]=[];
sources:Lokasi[]=[];

  constructor(private lokasiService:LokasiService,private message:MessageService,) {
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


  delete(data:any){
    this.message.dialog().fire({
      title: 'Yakin ?',
      text: "Menghapus Data !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya'
    }).then(x=>{
        this.lokasiService.delete(data.id).then(response=>{
          var index = this.datas.indexOf(data);  
          this.datas.splice(index,1);
          this.message.successMessage("Data  berhasil dihapus !");
        }, err=>{
          this.message.errorMessage("Data  tidak berhasil dihapus !");
        });
    });
  }

}

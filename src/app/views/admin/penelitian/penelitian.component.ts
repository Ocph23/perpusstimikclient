import { Component, OnInit } from '@angular/core';
import { Penelitian } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PenelitianService } from 'src/app/services/penelitian.service';

@Component({
  selector: 'app-penelitian',
  templateUrl: './penelitian.component.html',
  styleUrls: ['./penelitian.component.scss']
})
export class PenelitianComponent implements OnInit {

  datas:Penelitian[]=[];
  sources: Penelitian[]=[];

  constructor(private message:MessageService, penelitianService:PenelitianService) {
      penelitianService.get().then((result)=>{
        this.sources= result as Penelitian[];
        this.textChanged('');
      });
   }

  ngOnInit(): void {
  }


  
  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.judul.toLowerCase().includes(text)||
        x.penulis.toLowerCase().includes(text)||
        x.jurusan.toLowerCase().includes(text)||
        x.kode.toLowerCase().includes(text)||
        x.topik.toLowerCase().includes(text)||
        x.tahun.toString().includes(text)||
        x.pembimbing.toLowerCase().includes(text)
        );
      return;
    }

    this.datas= this.sources;


  }

}

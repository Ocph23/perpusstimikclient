import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lokasi } from 'src/app/models/buku.model';
import { LokasiService } from 'src/app/services/lokasi.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-lokasi',
  templateUrl: './add-lokasi.component.html',
  styleUrls: ['./add-lokasi.component.scss']
})
export class AddLokasiComponent implements OnInit {
  model:Lokasi={nama:"",  keterangan:""} as Lokasi;
  constructor(private lokasiService:LokasiService, private router:Router, private activedRouter:ActivatedRoute, private message:MessageService)  { 
    var param1:any = this.activedRouter.snapshot.paramMap.get('id');
    var id= parseInt(param1);  
    if(id){
        lokasiService.getById(id).then(response=>{
            this.model= response as Lokasi;
        })
    }

  }

  ngOnInit(): void {
  }



  save(model:Lokasi){
      if(model.id>0){
          this.lokasiService.update(model).then(x=>{
            this.router.navigate(["/admin/lokasi"]);
          });
      }else{
        this.lokasiService.post(model).then(x=>{
            this.router.navigate(["/admin/lokasi"]);
        })
      }
  }

}

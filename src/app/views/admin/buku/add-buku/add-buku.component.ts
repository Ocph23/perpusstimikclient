import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Buku, Lokasi } from 'src/app/models/buku.model';
import { BukuService } from 'src/app/services/buku.service';
import { HelperService } from 'src/app/services/helper.service';
import { LokasiService } from 'src/app/services/lokasi.service';

@Component({
  selector: 'app-add-buku',
  templateUrl: './add-buku.component.html',
  styleUrls: ['./add-buku.component.scss']
})
export class AddBukuComponent implements OnInit {

  model: Buku = {id:0} as Buku;
  imageCover:any;
  imageBibliografi:any;
  uploadBibliografiUrl:any="/api/buku/uploadbibliografi/"+this.model.id;
  uploadCoverUrl:any="/api/buku/uploadcover/"+this.model.id;
  dataLokasi!: Lokasi[];

  constructor(private lokasiService:LokasiService, private activedRouter:ActivatedRoute, private helperService:HelperService, private bukuService:BukuService, private httpClient:HttpClient) { 
      this.lokasiService.get().then(response=>{
          this.dataLokasi= response as Lokasi[];

          var param1:any = this.activedRouter.snapshot.paramMap.get('id');
          var id= parseInt(param1);  
          if(id){
              bukuService.getById(id).then(response=>{
                this.model=response as Buku;
                this.imageBibliografi = this.model.bibliografi?helperService.apiUrl+'/uploads/bibliografis/'+this.model.bibliografi:"";
                this.imageCover =this.model.cover?helperService.apiUrl+'/uploads/covers/'+this.model.cover:"";
                this.uploadBibliografiUrl="/api/buku/uploadbibliografi/"+this.model.id;
                this.uploadCoverUrl="/api/buku/uploadcover/"+this.model.id;
              },err=>{
      
              })
          }

      });
    
    
  }

  ngOnInit(): void {
  }

  save(model:Buku){
    if(model.id){
        this.bukuService.update(model).then(response=>{
          this.model=response as Buku;
        })
    }else{
      this.bukuService.post(model).then(response=>{
        var result=response as Buku;
        model.id=result.id;
      })  
    }

  }
  delete(model:Buku){

  }


  onUpload(event:boolean){
    
  }




}

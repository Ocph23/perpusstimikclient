import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Penelitian } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PenelitianService } from 'src/app/services/penelitian.service';
import { createPopper } from "@popperjs/core";

@Component({
  selector: 'app-penelitian',
  templateUrl: './penelitian.component.html',
  styleUrls: ['./penelitian.component.scss']
})
export class PenelitianComponent implements OnInit {

  datas:Penelitian[]=[];
  sources: Penelitian[]=[];
  
  popoverShow = false;
  @ViewChild('btnRef',{ static: false }) btnRef!:ElementRef;
  popper:any = document.createElement("div");
  constructor(private message:MessageService,private penelitianService:PenelitianService) {
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
        this.penelitianService.delete(data.id).then(response=>{
          var index = this.datas.indexOf(data);  
          this.datas.splice(index,1);
          this.message.successMessage("Data  berhasil dihapus !");
        }, err=>{
          this.message.errorMessage("Data  tidak berhasil dihapus !");
        });
    });
  }

  
  toggleTooltip(data:string){
    if(this.popoverShow){
      this.popoverShow = false;
      this.destroyPopper();
    } else {
      this.popper.innerHTML = `<div class="bg-red-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
      <div>
        <div class="bg-red-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
          Judul Penelitian
        </div>
        <div style="max-width:300px" class="text-white p-3">
         `+ data +`
        </div>
      </div>
    </div>`;
      this.popoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper(){
    this.popper.parentNode.removeChild(this.popper);
  }
  createPoppper(){
    createPopper(this.btnRef.nativeElement, this.popper, {
      placement: "top"
    });
    this.btnRef.nativeElement.parentNode.insertBefore(this.popper, this.btnRef.nativeElement.nextSibling);

  }

}

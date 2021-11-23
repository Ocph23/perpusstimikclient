import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pengembalian } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PengembalianService } from 'src/app/services/pengembalian.service';

@Component({
  selector: 'app-pengembalian',
  templateUrl: './pengembalian.component.html',
  styleUrls: ['./pengembalian.component.scss']
})
export class PengembalianComponent implements OnInit {

  
  dropdownPopoverShow = false;
  datas: Pengembalian[] = [];

  @ViewChild("btnDropdownRef", { static: false })  btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })  popoverDropdownRef!: ElementRef;
  sources: Pengembalian[]=[];

  constructor(private message:MessageService, pengembalianService:PengembalianService) {
    pengembalianService.get().then((result)=>{
        this.sources= result as Pengembalian[];
        this.textChanged('');
      });
   }



   ngOnInit(): void {
   }



  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  verifikasiPesanan(event: any) {
    this.dropdownPopoverShow = false;
    
  }

  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.peminjaman.anggota.nama.toLowerCase().includes(text)||
        x.id.toString().toLowerCase().includes(text)||
        x.tanggal.toString().toLowerCase().includes(text)
        );
      return;
    }
    this.datas= this.sources;
  }
}

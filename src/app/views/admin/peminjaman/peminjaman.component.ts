import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Peminjaman } from 'src/app/models/buku.model';
import { MessageService } from 'src/app/services/message.service';
import { PeminjamanService } from 'src/app/services/peminjaman.service';




@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.scss']
})
export class PeminjamanComponent implements OnInit {

 
  dropdownPopoverShow = false;
  datas: Peminjaman[] = [];
  sources: Peminjaman[]=[];

  @ViewChild("btnDropdownRef", { static: false })  btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })  popoverDropdownRef!: ElementRef;

  constructor(private router:Router, private message:MessageService, peminjamanService:PeminjamanService) {
    peminjamanService.get().then((result)=>{
        this.sources= result as Peminjaman[];
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
    this.router.navigate(["/admin/pengembalian/"+event.items[0].ItemKarya.nomorseri]);
  }
  
  textChanged(textparam:any){
    var text = textparam.toString().toLowerCase();
    if(text){
      this.datas = this.sources.filter(
        x=>x.anggota.nama.toLowerCase().includes(text)||
        x.id.toString().toLowerCase().includes(text)||
        x.status.toLowerCase().includes(text)||
        x.created_at.toString().toLowerCase().includes(text)
        );
      return;
    }
    this.datas= this.sources;
  }


}
